import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TextsService {
    homePage = {
        title_part1: 'לקר',
        title_part2: 'י',
        title_part3: 'את',
        title_part4: 'העתיד',
    }

    errors = {
        requiredField: 'שדה זה הוא חובה',
        invalidEmail: 'כתובת מייל לא תקינה',
    };

    // את יכולה גם להפריד לפי דפים או מודולים
}