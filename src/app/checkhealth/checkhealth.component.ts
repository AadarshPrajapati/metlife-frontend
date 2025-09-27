import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-checkhealth',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './checkhealth.component.html',
  styleUrls: ['./checkhealth.component.css']
})
export class CheckHealthComponent {
  showReport = false;
  report: any = null;

  healthData: any = {
    age: null,
    gender: '',
    bmi: null,
    daily_steps: null,
    sleep_hours: null,
    water_intake_l: null,
    calories_consumed: null,
    is_smoker: false,
    is_drinker: false,
    resting_hr: null,
    systolic_bp: null,
    diastolic_bp: null,
    cholesterol: null,
    any_family_disease_history: false
  };

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    // Uncomment for real API call
    /*
    this.http.post('https://api.example.com/healthcheck', this.healthData)
      .subscribe((res: any) => {
        this.report = res;
        this.showReport = true;
      });
    */

    // Mock response
    this.report = {
      risk_score: 72,
      recommendation: 'Increase daily steps to 10,000, reduce cholesterol intake, maintain BMI under 25.'
    };
    this.showReport = true;
  }

  downloadPdf() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('MetLife Health Report', 20, 20);

    doc.setFontSize(12);
    doc.text(`Risk Score: ${this.report.risk_score}`, 20, 40);
    doc.text('Recommendation:', 20, 50);

    // Split long text into lines
    const lines = doc.splitTextToSize(this.report.recommendation, 170);
    doc.text(lines, 20, 60);

    doc.save('health_report.pdf');
  }
}
