import { EventEmitter, ElementRef } from '@angular/core';
import * as Cropper from 'cropperjs';
export interface ImageCropperSetting {
    width: number;
    height: number;
}
export interface ImageCropperResult {
    imageData: Cropper.ImageData;
    cropData: Cropper.CropBoxData;
    blob?: Blob;
    dataUrl?: string;
}
/**
 * If you intend to get a JPEG image from the output canvas, you should set the fillColor option first,
 * if not, the transparent part in the JPEG image will become black by default.
 */
export interface ImageCropperCroppedCanvasOptions {
    /**
     * the destination width of the output canvas.
     */
    width?: number;
    /**
     *  the destination height of the output canvas.
     */
    height?: number;
    /**
     * the minimum destination width of the output canvas, the default value is 0.
     */
    minWidth?: number;
    /**
     * the minimum destination height of the output canvas, the default value is 0.
     */
    minHeight?: number;
    /**
     * the maximum destination width of the output canvas, the default value is Infinity.
     */
    maxWidth?: number;
    /**
     * the maximum destination height of the output canvas, the default value is Infinity.
     */
    maxHeight?: number;
    /**
     * a color to fill any alpha values in the output canvas, the default value is transparent.
     */
    fillColor?: string;
    /**
     * set to change if images are smoothed(true, default ) or not(false).
     */
    imageSmoothingEnabled?: boolean;
    /**
     * set the quality of image smoothing, one of "low"(default ), "medium", or "high".
     */
    imageSmoothingQuality?: string;
}
export declare class AngularCropperjsComponent {
    image: ElementRef;
    imageUrl: any;
    settings: ImageCropperSetting;
    cropbox: Cropper.CropBoxData;
    loadImageErrorText: string;
    cropperOptions: any;
    export: EventEmitter<ImageCropperResult>;
    ready: EventEmitter<{}>;
    isLoading: boolean;
    cropper: Cropper;
    imageElement: HTMLImageElement;
    loadError: any;
    /**
     * Image lodaded event
     * @param {event} ev
     */
    imageLoaded(ev: Event): void;
    imageReadyEvent(): void;
    /**
     * Image load error
     * @param {event} event
     */
    imageLoadError(event: any): void;
    /**
     * Export canvas
     * @param {string} base64
     */
    exportCanvas(base64?: boolean, canvasOptions?: ImageCropperCroppedCanvasOptions): void;
}
