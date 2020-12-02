import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'capitalizeword'
})
export class CapitalizeWordPipe implements PipeTransform{
    transform(name:any){
        return (name) ? name.charAt(0).toUpperCase() + name.substr(1).toLowerCase() : '';
    }
}
