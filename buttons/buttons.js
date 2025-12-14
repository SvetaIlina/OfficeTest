import { btns, states } from "./config.js"

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
    btn.innerText = this.text
    btn.style.backgroundColor = this.bgColor

    if (this.textColor) {
      btn.style.color = this.textColor
    }
    if (this.border) btn.style.border = this.border

    if (this.icon) {
      const img = document.createElement("img")
      img.src = this.icon
      img.alt = ""
      img.classList.add("btn-icon")
      btn.append(img)
    }

    if (this.after) {
      const afterEl = document.createElement("span")
      afterEl.classList.add(this.after)
      btn.append(afterEl)
    }

    if (this.icon || this.after) {
      btn.classList.add("btn--flex")
    }

    return btn
  }
}

function renderBtn(parent) {
  const config = btns.find((i) => i.parent === parent.dataset.id)
  if (!config) return

  states.forEach((stateClass) => {
    const btn = new Button(
      ["btn", stateClass, config.className],
      config.bgColor,
      config.text,
      config.border,
      config.icon,
      config.after,
      config.textColor
    ).buildBtn()

    parent.append(btn)
  })
}

function renderActionBtn() {
  const actionParent = document.getElementsByClassName("action-btn-container")
  const actionBtn = btns.filter((obj) => obj.parent === "action-btn-container")
  if (actionBtn.length) {
    actionBtn.forEach((item) => {
      const btn = new Button(
        ["btn", item.className],
        item.bgColor,
        item.text,
        item.border,
        item.icon,
        item.after,
        item.textColor
      ).buildBtn()

      actionParent[0].append(btn)
    })
  }
}

const parents = document.getElementsByClassName("btn-container")

Array.from(parents).forEach((parent) => renderBtn(parent))
renderActionBtn()
