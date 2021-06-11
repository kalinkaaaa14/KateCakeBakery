import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent implements OnInit {
  addProduct: FormGroup;
  token = localStorage.getItem('token');

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataStorage: DataStorageService) {
  }

  ngOnInit(): void {

    if (!this.token) {
      this.router.navigate(['/home']);
    }

    this.addProduct = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        mainPhoto: new FormControl(null, [Validators.required]),
        ingredients: new FormControl(null, [Validators.required]),
        supplements: new FormControl(null, [Validators.required]),
        price: new FormControl(null, [Validators.required]),
        weight: new FormControl(null, [Validators.required]),
      }
    );
  }

  async add(): Promise<void> {
  }

}
