const btns = [
  {
    parent: "gray-btn-container",
    bgColor: "#ebebeb",
    border: "1px solid #afafaf",
  },
  {
    parent: "red-stroke-btn-container",
    bgColor: "#ebebeb",
    border: "2px solid #db241f",
  },
  {
    parent: "red-btn-container",
    bgColor: "#ca130c",
    textColor: "#fff",
  },
  {
    parent: "arrow-btn-container",
    bgColor: "#ebebeb",
    border: "1px solid #afafaf",
    after: true,
  },
  {
    parent: "green-btn-container",
    bgColor: "#6e9735",
    textColor: "#fff",
  },
  {
    parent: "green-stroke-btn-container",
    bgColor: "#ebebeb",
    border: "2px solid #6d9735",
  },
]

const states = ["btn", "btn--hover", "btn--active", "btn--disabled"]

function createNode(element, ...classes) {
  const node = document.createElement(element)
  node.classList.add(...classes)
  return node
}

class Button {
  constructor(
    classes,
    bgColor,
    text = "Просмотреть",
    border = null,
    icon = null,
    after = false,
    textColor = "inherit"
  ) {
    this.classes = classes
    this.bgColor = bgColor
    this.border = border
    this.icon = icon
    this.after = after
    this.text = text
    this.textColor = textColor
  }

  buildBtn() {
    const btn = createNode("button", ...this.classes)
    btn.style.backgroundColor = this.bgColor

    if (this.textColor) {
      btn.style.color = this.textColor
    }
    if (this.border) btn.style.border = this.border

    if (this.icon) {
      const iconEl = this.icon()
      iconEl.classList.add("btn-icon")
      btn.append(iconEl)
    }

    if (this.after) {
      const afterEl = document.createElement("span")
      afterEl.classList.add("after-icon")
      btn.append(afterEl)
    }

    if (this.icon || this.after) {
      btn.classList.add("btn--flex")
    }

    const textNode = document.createElement("span")
    textNode.textContent = this.text
    textNode.classList.add("btn-text")
    btn.append(textNode)

    return btn
  }
}

function renderBtn(parent) {
  const config = btns.find((i) => i.parent === parent.dataset.id)
  if (!config) return

  states.forEach((stateClass) => {
    const btn = new Button(
      ["btn", stateClass],
      config.bgColor,
      "Просмотреть",
      config.border,
      config.icon,
      config.after,
      config.textColor
    ).buildBtn()

    parent.append(btn)
  })
}

const parents = document.getElementsByClassName("btn-container")

Array.from(parents).forEach((parent) => renderBtn(parent))
