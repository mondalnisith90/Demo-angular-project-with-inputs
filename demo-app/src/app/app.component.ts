import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text: string = "";

  // signupForm: FormGroup  = new FormGroup({
  //   name: new FormControl(""),
  //   address: new FormControl(""),
  //   gender: new FormControl("male"),
  //   course: new FormControl(""),
  //   dropdown: new FormControl("default"),
  //   email: new FormControl(""),
  //   password: new FormControl("")
  // });


  constructor(private fb: FormBuilder) {

  }

  coursesList: Array<string> = ['C', 'JAva', 'NodeJS', 'AngularJS', 'Android'];
  selectedCoursesList: Array<string> = [];


  signupForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    courses: this.fb.array(this.addCoursesArray()),
    projects: this.fb.array([])
  });



  get projectArray() {
    return <FormArray> this.signupForm.get("projects");
  }

 get courseArray() {
   return <FormArray> this.signupForm.get("courses");
 }

  addProject(): FormGroup {
    return this.fb.group({
      projectName: [''],
      usedTechnologies: [''],
      description: [''],
      StartingDate: [''],
      endingDate: ['']
    })
  }

  addCoursesArray(): Array<FormControl>{
   const courseListControls = this.coursesList.map((course, index)=>{
     return this.fb.control(false);
   });
   return courseListControls;
  }

  corseCheckboxChange(){
    this.selectedCoursesList = [];
    this.coursesList.forEach((course, index)=>{
      if(this.signupForm.value.courses[index]){
        this.selectedCoursesList.push(course);
      }
    });
  }

  addProjectBtnClick() {
    this.projectArray.push(this.addProject());
  }

  deleteProject(index: number){
    this.projectArray.removeAt(index);
  }

  signupFormSubmit() {
    console.log(this.signupForm.value);
    console.log(this.selectedCoursesList)
  }
}
