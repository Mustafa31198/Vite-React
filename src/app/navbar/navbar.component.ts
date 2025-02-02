import { log } from 'console';
import { MailsService } from './../shared/servces/mails.service';
import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Params,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { Category } from '../imeal';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private readonly mailsService = inject(MailsService);
  private route = inject(ActivatedRoute);
  constructor() {}

  meal!: Category;
  categoryId!: string;
  ngOnInit(): void {
    this.route.params.subscribe((pars) => {
      this.categoryId = pars['name']!;
      this.getMeals();
      
    });
  }

  getMeals() {
    if(this.categoryId == 'all'){
      this.mailsService.getAllMeals().subscribe({
        next: (res) => {
          this.meal = res;
          // console.log(this.meal.meals);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
    else {
      this.mailsService.getMealsByCategory(this.categoryId).subscribe({
        next: (res) => {
          this.meal = res;
          // console.log(this.meal.meals);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }




}
