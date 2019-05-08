import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FILE_TYPES} from '../../shared/constants/settings';
import {FILE_IMPORT_DROPZONE_CONFIG} from '../../shared/constants/dropzone';
import {FilesService} from '../../shared/services/files.service';

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

    constructor(
        private _fb: FormBuilder,
        private _files: FilesService
    ) {
        this.importFilesForm = this._fb.group({
            'group': ['', Validators.required],

        });
    }

    ngOnInit() {
    }

    onAddedFile(e) {
        // console.log(e)
        this.dropzoneFiles.push(e);
    }

    importFiles() {
        const formData = new FormData();
        for (const field in this.importFilesForm.value) {
            formData.append(field, this.importFilesForm.value[field]);
        }

        const files = this.dropzoneFiles;
        files.map(file => {
            if (file['name']) {
                const nameArr = file['name'].split('.');
                const fileName = `${nameArr[0]}.${nameArr[1]}`;
                formData.append('imported_files', fileName);
                formData.append('imported_file', file, fileName);
            }

        });

        this._files.import(formData).subscribe(dt => {

        });
    }

    removeFile(e) {
        this.dropzoneFiles = this.dropzoneFiles.filter(file => file.name && file.name !== e.name);

    }
}
