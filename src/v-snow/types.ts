export interface SceneConfig {
  fall_speed: number;
  density: number;
  size: number;
  color: string;
  images?: string[];
  opacity: number;
  zIndex?: string;
  show?: boolean;
}

export enum FlakeEdgePosition {
  TOP_BOUNDARY,
  BOTTOM_BOUNDARY,
  LEFT_BOUNDARY,
  RIGHT_BOUNDARY
}
