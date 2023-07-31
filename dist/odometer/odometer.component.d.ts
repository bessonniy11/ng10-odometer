/// <reference path="../../src/odometer/odometer.d.ts" />
import { OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Ng10OdometerConfigModel } from './odometer.config';
export declare class Ng10OdometerComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private subscription;
    private odometer;
    container: ElementRef;
    number: number;
    config: Ng10OdometerConfigModel;
    observable: Observable<boolean>;
    animation: string;
    format: string;
    theme: string;
    value: number;
    duration: number;
    auto: boolean;
    private themes;
    private initOdometer();
    private initConfig();
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
}
