import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoxComponent } from './product-box.component';

describe('ProductBoxComponent', () => {
  let component: ProductBoxComponent;
  let fixture: ComponentFixture<ProductBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render image component tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-product-image')).not.toBe(null);
  }));

  it('should render details component tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-product-details')).not.toBe(null);
  }));
});
