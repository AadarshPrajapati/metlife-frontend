import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ import CommonModule
// import { AuthService } from '../auth.service'; // uncomment when using actual API

@Component({
  selector: 'app-coinpoints',
  standalone: true,
  imports: [CommonModule], // ✅ add CommonModule here
  templateUrl: './coinpoints.component.html',
  styleUrls: ['./coinpoints.component.css']
})
export class CoinPointsComponent implements OnInit {

  currentLevel: number = 3; // sample: user is at level 3 (from bottom)
  totalPoints: number = 0;
  levels: { levelNumber: number, coins: number, status: 'completed' | 'pending' }[] = [];

  constructor(
    // private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Sample JSON for now
    const sampleJson = { level: 45 }; 
    this.currentLevel = sampleJson.level;

    // Uncomment below for API call later
    // this.authService.getUserLevel().subscribe(res => {
    //   this.currentLevel = res.level;
    //   this.buildLevels();
    // });

    this.buildLevels();
  }

  buildLevels() {
  const totalVisibleLevels = 5;
  this.levels = [];

  // Calculate start level so current level is 3rd from bottom
  const startLevel = this.currentLevel - 2; // 2 levels below current
  for (let i = 0; i < totalVisibleLevels; i++) {
    const levelNum = startLevel + i;
    const status = levelNum > this.currentLevel ? 'pending' : 'completed';

    this.levels.push({
      levelNumber: levelNum,
      coins: 10,
      status: status
    });
  }

  // ✅ Total points = currentLevel × 10
  this.totalPoints = this.currentLevel * 10;
}


}
