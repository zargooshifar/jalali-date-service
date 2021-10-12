# JalaliDateService

jalali date provider for nebular datepicker



```
@NgModule({
....
  providers: [
    { provide: NB_TIME_PICKER_CONFIG, useValue: {} },
    { provide: NbDateService, useClass: JalaliDateService }],
 
})
```