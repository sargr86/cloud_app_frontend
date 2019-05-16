import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FILE_TYPES} from '../../shared/constants/settings';
import {FILE_IMPORT_DROPZONE_CONFIG} from '../../shared/constants/dropzone';
import {FilesService} from '../../shared/services/files.service';
import {ToastrService} from 'ngx-toastr';
import * as XLSX from 'xlsx';
import {MatPaginator} from '@angular/material';
import {GetMatTableDataSourcePipe} from '../../shared/pipes/get-mat-table-data-source.pipe';

@Component({
    selector: 'app-import-files',
    templateUrl: './import-files.component.html',
    styleUrls: ['./import-files.component.scss']
})
export class ImportFilesComponent implements OnInit {

    importFilesForm: FormGroup;
    fileTypes = FILE_TYPES;
    dropzoneFiles = [];
    dropzoneConfig = FILE_IMPORT_DROPZONE_CONFIG;
    arrayBuffer: any;
    filesProcessing = false;
    filesUploaded = false;
    loadedData: any;
    // @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    dataSource;
    dataSource2;

    constructor(
        private _fb: FormBuilder,
        private _files: FilesService,
        private toastr: ToastrService,
        private dataSrc: GetMatTableDataSourcePipe
    ) {
        this.importFilesForm = this._fb.group({
            'group': ['', Validators.required],
        });
    }

    ngOnInit() {
    }

    getDataSrc(dt, index) {
        let ret;
        ret = this.dataSrc.transform(dt);
        // ret.paginator = 'ok';
        console.log(ret)
        // ret.paginator =  this.paginator.toArray()[0];

        // this.dataSource1 = this.dataSrc.transform(dt);
        // this.dataSource1.paginator = this.paginator.toArray()[0];

        // console.log(this.dataSource1)
        // // console.log( this.paginator.toArray())
        return ret;
    }

    onAddedFile(e) {
        // console.log(e)
        this.dropzoneFiles.push(e);
    }

    importFiles() {


        // this.dropzoneFiles.map(file => {
        //     const fileReader = new FileReader();
        //     fileReader.onload = (e) => {
        //         this.arrayBuffer = fileReader.result;
        //         const data = new Uint8Array(this.arrayBuffer);
        //         const arr = [];
        //         for (let i = 0; i !== data.length; ++i) {
        //             arr[i] = String.fromCharCode(data[i]);
        //         }
        //         const bstr = arr.join('');
        //         const workbook = XLSX.read(bstr, {type: 'binary'});
        //         const first_sheet_name = workbook.SheetNames[0];
        //         const worksheet = workbook.Sheets[first_sheet_name];
        //         console.log(XLSX.utils.sheet_to_json(worksheet, {raw: true}));
        //     };
        //     fileReader.readAsArrayBuffer(file);
        // });


        const formData = new FormData();
        for (const field in this.importFilesForm.value) {
            formData.append(field, this.importFilesForm.value[field]);
        }

        const files = this.dropzoneFiles;

        if (files && files.length > 0) {
            files.map(file => {
                if (file['name']) {
                    const nameArr = file['name'].split('.');
                    const fileName = `${nameArr[0]}.${nameArr[1]}`;
                    formData.append('imported_files', fileName);
                    formData.append('imported_file', file, fileName);
                }

            });
            this.filesProcessing = true;
            this._files.import(formData).subscribe(dt => {
                this.filesProcessing = false;
                this.filesUploaded = true;
                this.loadedData = dt[0];
                this.dataSource = this.dataSrc.transform(dt[0]);
                // console.log(this.paginator)
                this.dataSource.paginator = this.paginator;
                // console.log(this.dataSource)
            });
        } else {
            this.toastr.error('Please select at least one file', 'No files');
        }


    }

    removeFile(e) {
        this.dropzoneFiles = this.dropzoneFiles.filter(file => file.name && file.name !== e.name);

    }

    getObjectValues(obj) {
        return Object.values(obj);
    }

    getObjectKeys(obj) {
        return Object.keys(obj);
    }
}
