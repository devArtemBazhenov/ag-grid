import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FetchDataService } from './fetch-data.service';

describe('FetchDataService', () => {
  let httpTestingController: HttpTestingController;
  let service: FetchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);

    service = TestBed.get(FetchDataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('#fetchData should use GET to retrieve data', () => {
    service.fetchData('http://localhost:9999/data').subscribe();

    const testRequest = httpTestingController.expectOne('http://localhost:9999/data');

    expect(testRequest.request.method).toEqual('GET');
  });

});
