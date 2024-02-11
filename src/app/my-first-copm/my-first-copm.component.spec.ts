import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstCopmComponent } from './my-first-copm.component';

describe('MyFirstCopmComponent', () => {
  let component: MyFirstCopmComponent;
  let fixture: ComponentFixture<MyFirstCopmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFirstCopmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFirstCopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
