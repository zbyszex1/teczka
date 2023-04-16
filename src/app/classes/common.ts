import { ActivatedRoute } from '@angular/router';

export class Common {

  public static GetRoot(path: string): string {
    let root = path;
    let j = 1;
    for (let i=0; j>0 && i<2; i++) {
      j= root.lastIndexOf('/');
      root = root.substring(0, j);
    }
    return root;
  }

  public static FillNumbers(min: string, max: string): Array<string> {
    const pMin = parseInt(min);
    const pMax = parseInt(max); 
    const num =  pMax - pMin + 1;
    let numbers = new Array<string>(num);
    for(let i=0; i<num; i++) {
      let i_str = (i+pMin).toString();
      if (i <= 99)
        i_str = '0' + i_str;
      if (i <= 9)
        i_str = '0' + i_str;
      numbers[i] = i_str;
    }
    return numbers;
  }

  public static GetPath(route: ActivatedRoute): string {
    let urls = route.snapshot.url;
    let path = '';
    if (urls.length > 0)
      path = urls[0].path;
    switch(urls[0].path)
    {
      case 'tom1':
        path = '/assets/vol1/';
        break;
      case 'tom2':
        path = '/assets/vol2/';
        break;
      default:
        path = '/assets/other/';
        break;
    }
    return path;
  }

}
