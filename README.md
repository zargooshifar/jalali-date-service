# JalaliDateService

jalali date provider for nebular datepicker

## install
```
npm i @zargooshifar/jalali-date-service
```


## import and inject
```
import {JalaliDateService} from "@zargooshifar/jalali-date-service";


@NgModule({
....
  providers: [
    { provide: NB_TIME_PICKER_CONFIG, useValue: {} },
    { provide: NbDateService, useClass: JalaliDateService }],
 
})
```