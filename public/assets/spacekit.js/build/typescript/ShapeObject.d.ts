import * as THREE from 'spacekit.js/node_modules/three';
import { RotatingObject } from 'spacekit.js/build/typescript/RotatingObject';
import type { Simulation } from 'spacekit.js/build/typescript/Simulation';
import type { SpaceObjectOptions } from 'spacekit.js/build/typescript/SpaceObject';
export declare class ShapeObject extends RotatingObject {
    private shapeObj;
    private loadingPromise;
    /**
     * @param {Object} options.shape Shape specification
     * @param {String} options.shape.type Type of object ("custom" or "sphere")
     * @param {String} options.shape.shapeUrl Path to shapefile if type is "custom"
     * @param {Number} options.shape.textureUrl Optional texture map for shape
     * @param {Number} options.shape.color Color of shape materials. Default 0xcccccc
     * @param {Number} options.shape.radius Radius, if applicable. Defaults to 1
     * @param {Object} options.shape.debug Debug options
     * @param {boolean} options.shape.debug.showAxes Show axes
     * rotation speed. Default 0.5
     * @see SpaceObject
     * @see RotatingObject
     */
    constructor(id: string, options: SpaceObjectOptions, simulation: Simulation);
    /**
     * Specifies the object that is used to compute the bounding box.
     * @return {THREE.Object3D} THREE.js object
     */
    getBoundingObject(): Promise<THREE.Object3D>;
}
