import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  summaryCards = [
    { title: 'Users', value: 1250, icon: 'person' },
    { title: 'Sales', value: 680, icon: 'shopping_cart' },
    { title: 'Revenue', value: '$45,320', icon: 'attach_money' }
  ];

  @ViewChild('barChart') barChart: any;

  ngAfterViewInit() {
    new Chart(this.barChart.nativeElement, {
      type: 'bar' as ChartType,
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales',
          data: [30, 45, 60, 40, 70, 50],
          backgroundColor: 'rgba(54, 162, 235, 0.5)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}