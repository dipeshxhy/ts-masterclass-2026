const STATUS_LOADING = 'loading';
const STATUS_SUCCESS = 'success';
const STATUS_ERROR = 'error';

// enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}
let eDirection: EDirection = EDirection.Up;
let direction: Direction = Direction.Up;

// object
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
type ODirection = (typeof ODirection)[keyof typeof ODirection];
let oDirection: ODirection = ODirection.Up;
