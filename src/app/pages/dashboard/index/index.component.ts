import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    form: FormGroup;

    constructor(
        private _fb: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.form = this._fb.group({
            peoples: this._fb.array([
            ])
        })
    }

    get peoples(): FormArray {
        return this.form.get('peoples') as FormArray;
    }

    addPeople() {
        this.peoples.push(this._fb.group({
            name: null,
            phone: null,
        }));
    }

    deletePeople(i: number) {
        this.peoples.removeAt(i);
    }

    submit() {
        const values = this.form.getRawValue();
        console.log(values)
    }

}
