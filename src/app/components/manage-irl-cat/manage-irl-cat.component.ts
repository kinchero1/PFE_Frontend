import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryServiceService } from 'src/app/category-service.service';
import { Category } from 'src/app/models/category';

import { EventemitterService } from 'src/app/services/eventemitter.service';

@Component({
  selector: 'app-manage-irl-cat',
  templateUrl: './manage-irl-cat.component.html',
  styleUrls: ['./manage-irl-cat.component.css']
})
export class ManageIrlCatComponent implements OnInit {

  constructor(private eventEmitter: EventemitterService,
   
    private fb: FormBuilder,
    private catSer: CategoryServiceService) { }

  ngOnInit(): void {
    this.displayData();
  }

  categoryForm = this.fb.group({
    id: [0, [Validators.required]],
    title: ['ffff', [Validators.required, Validators.minLength(3)]],

    createdDate: [new Date()]
  })



  showModal = false;
  showRoModal = false;
  deleteCategoryId: number;
  paginCategories: Observable<any>
  pageSize: number = 4;
  pageNumber: number = 0;

  categoryName: string;


 
  addCategory = true;

  displayData() {

    this.paginCategories = this.catSer.getAllPaginIRLCategories(this.pageSize, this.pageNumber, this.categoryName)


  }


  updatecategory() {



    if (this.categoryForm.valid) {


      if (this.addCategory) {
        this.catSer.addIRLCategory(this.categoryForm.value).toPromise().then(data => {
          this.eventEmitter.showPopUP({ type: "success", message: "Category has been added" })
          this.displayData();
        }).catch(err => {
          this.eventEmitter.showPopUP({ type: "error", message: err.error })
        })
      } else {
        
        this.catSer.updateIRLCategory(this.categoryForm.value).toPromise().then(data => {
          this.eventEmitter.showPopUP({ type: "success", message: "Category has been updated" })
          this.displayData();
        }).catch(err => {
          this.eventEmitter.showPopUP({ type: "error", message: err.error })
        })

      }
      this.closeCategoryModal();
    

    }
  }



  openModal(id) {
    this.deleteCategoryId = id;

    this.showModal = true;
  }


  closeModal() {
    this.deleteCategoryId = undefined;
 
    this.showModal = false;
  }

  showCategoryModal(category: Category=null) {
    if (category) {
      this.id.setValue(category.id)
      this.title.setValue(category.title)

      this.creationDate.setValue(category.createdDate)

      this.addCategory = false;
    } else {

      this.id.setValue(0)
      this.title.setValue('')

      this.creationDate.setValue(new Date())

      this.addCategory = true;
    }

    this.showRoModal = true;
  }

  closeCategoryModal() {
    this.showRoModal = false;
  }


  deleteCategory() {


    this.catSer.deleteIRLCategory(this.deleteCategoryId).toPromise().then(data => {
      this.eventEmitter.showPopUP({ type: "success", message: data })
      this.displayData();
    }).catch(err => {
      this.eventEmitter.showPopUP({ type: "error", message: err.error })
      console.log(err.error);
      
    })


    this.closeModal();
  }

  incrementPages() {
    this.pageNumber++;
    this.displayData();
  }

  decrementPages() {
    this.pageNumber--;
    this.displayData();
  }

  filter() {

    this.displayData();
  }

  get id() {
    return this.categoryForm.get('id')

  }

  get title() {
    return this.categoryForm.get('title')

  }



  get creationDate() {
    return this.categoryForm.get('createdDate')
  }
}
