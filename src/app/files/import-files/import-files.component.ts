import {AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
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
    paginationApplied = false;
    loadedData: any;

    showResults = false;
    t;
    loaderText = '';
    // columns = ['File Name', 'File Desc', 'File type', 'Import by', 'Import date/time', 'Changed by', 'Changed date/time'];
    columns = ['file_name', 'file_desc', 'file_type', 'import_by', 'import_date', 'changed_by', 'changed_date'];
    detailColumns = ['file_name', 'file_type', 'total_records', 'success', 'error', 'warnings/info', 'actions'];
    selectedUploadedFiles = [];
    fileDetailsShown = false;

    @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

    // @ViewChild(MatPaginator) paginator: MatPaginator;
    dataSource = [];
    dataSource2;

    constructor(
        private _fb: FormBuilder,
        private _files: FilesService,
        private toastr: ToastrService,
        private dataSrc: GetMatTableDataSourcePipe,
        private cdr: ChangeDetectorRef
    ) {
        this.importFilesForm = this._fb.group({
            'group': ['', Validators.required],
            'type': ['', Validators.required]
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
            this.loaderText = 'Importing';
            this._files.import(formData).subscribe((dt: any) => {
                this.filesProcessing = false;
                this.filesUploaded = true;
                this.loadedData = dt;
                // for (const filename in dt) {
                //     const dataSource = this.dataSrc.transform(dt[filename]);
                //     this.dataSource[filename] = dataSource;
                // }
                this.cdr.detectChanges();


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

    getObjectKeys(obj, last) {
        if (last) {
            setTimeout(() => this.loadPagination(), 14000);
            // this.t = setTimeout(() => {
            //     this.paginationApplied = true;
            //     this.filesProcessing = false;
            // }, 4000);
            //

        }
        return Object.keys(obj);
    }

    stop() {
        console.log('stop' + this.t)
        clearTimeout(this.t);
    }


    loadPagination() {

        // console.log(this.loaderText)
        this.showResults = true;
        let counter = 0;
        const paginatorArr = this.paginator.toArray();
        for (const filename in this.dataSource) {
            this.dataSource[filename].paginator = paginatorArr[counter];
            if (counter === paginatorArr.length - 1) {
                counter = 0;
                break;
            } else ++counter;
        }


        this.paginationApplied = true;
        this.filesProcessing = false;
    }

    getArray() {
        return new Array(this.dropzoneFiles.length);
    }

    selectUploadedFile(fileData) {
        this.selectedUploadedFiles.push(fileData);

    }

    showFileDetails() {
        if (this.selectedUploadedFiles.length === 0) {
            this.toastr.error('Please select at least one file with table checkbox', 'No files selected');
        } else {

            this.fileDetailsShown = true;
        }
        console.log(this.selectedUploadedFiles)
    }
}
