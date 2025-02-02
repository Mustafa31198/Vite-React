import { Params } from '@angular/router';
import { Category } from './../imeal';
import { Component, inject, OnInit } from '@angular/core';
import { MailsService } from '../shared/servces/mails.service';
import { MealRecipe } from '../imeal';
import {
  ActivatedRoute,
  ParamMap,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  private readonly mailsService = inject(MailsService);
  private route = inject(ActivatedRoute);
  data!: any;
  id!: any;
  intgredint!: { key: string; value: string }[];

  ngOnInit(): void {
    this.route.params.subscribe((pars) => {
      this.id = pars['id'];
      console.log(this.id);
      this.getDetails();
    });
  }
  getDetails() {
    this.mailsService.getDetails(this.id).subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data);
        this.intgredint = Object.entries(res.meals[0]).map(([key, value]) => ({
          key,
          value,
        }));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
