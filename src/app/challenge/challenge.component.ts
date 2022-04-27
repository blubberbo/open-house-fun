import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Challenge } from './challenge';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }

  @Input() challenge: Challenge = new Challenge(1, '11/2/2021', 12, '1104 Park Hills Rd Berkeley CA 94708', [], 1350000, 1400000, '11/30/2020');
  id!: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
    });
  }

}
