import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spacex-launches',
  templateUrl: './spacex-launches.component.html',
  styleUrls: ['./spacex-launches.component.css']
})
export class SpacexLaunchesComponent implements OnInit {
  launches: any[] = [];
  filteredLaunches: any[] = [];
  apiUrl = 'https://api.spacexdata.com/v4/launches';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLaunches();
  }

  fetchLaunches(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.launches = data;
      this.filteredLaunches = data;
    });
  }

  filterSuccessful(): void {
    this.filteredLaunches = this.launches.filter(launch => launch.success);
  }
}
