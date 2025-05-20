export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
  this.resize = (newWidth, newHeight) => {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
  this.move = (newX, newY) => {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.position = new Position();
    this.size = new Size();
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x
    const maxHeight = this.screenSize.height - this.position.y

    if (newSize.width > 1 || newSize.height > 1) {
      const newWidth = newSize.width < maxWidth ? newSize.width : maxWidth;
      const newHeight = newSize.height < maxHeight ? newSize.height : maxHeight;

      this.size.resize(newWidth, newHeight)
      return
    }
    this.size.resize(1, 1)

  }


  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width
    const maxY = this.screenSize.height - this.size.height

    if (newPosition.x > 0 || newPosition.y > 0) {
      const newX = newPosition.x < maxX ? newPosition.x : maxX;
      const newY = newPosition.y < maxY ? newPosition.y : maxY;
      this.position.move(newX, newY)
      return
    }
    this.position.move(0, 0)
  }

}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300))
  programWindow.move(new Position(100, 150))
  return programWindow
}