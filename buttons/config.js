export const btns = [
  {
    parent: "gray-btn-container",
    buttons: [{ bgColor: "#ebebeb", border: "1px solid #afafaf" }],
    needState: true,
  },
  {
    parent: "red-stroke-btn-container",

    buttons: [{ bgColor: "#ebebeb", border: "2px solid #db241f" }],
    needState: true,
  },
  {
    parent: "red-btn-container",

    buttons: [{ bgColor: "#ca130c", textColor: "#fff" }],
    needState: true,
  },
  {
    parent: "arrow-btn-container",

    buttons: [{ bgColor: "#ebebeb", border: "1px solid #afafaf", after: "after-icon" }],
    needState: true,
  },
  {
    parent: "green-btn-container",

    buttons: [{ bgColor: "#6e9735", textColor: "#fff" }],
    needState: true,
  },
  {
    parent: "green-stroke-btn-container",

    buttons: [{ bgColor: "#ebebeb", border: "2px solid #6d9735" }],
    needState: true,
  },
  {
    parent: "action-btn-container",
    buttons: [
      {
        bgColor: "#ebebeb",
        border: "1px solid #afafaf",
        text: "Редактировать",
        icon: "/img/edit.svg",
      },
      {
        bgColor: "#ebebeb",
        border: "1px solid #afafaf",
        text: "Выгрузить в Exel",
        icon: "/img/export.svg",
      },
      {
        bgColor: "#ebebeb",
        border: "1px solid #afafaf",
        text: "Удалить список",
        icon: "/img/delete.svg",
      },
      {
        bgColor: "#ebebeb",
        border: "1px solid #afafaf",
        text: "Распечатать",
        icon: "/img/print.svg",
      },
      {
        bgColor: "#ebebeb",
        border: "1px solid #afafaf",
        text: "Загрузить из файла",
        icon: "/img/import.svg",
      },
    ],
    className: "large-btn",
  },
]

export const states = ["btn", "btn--hover", "btn--active", "btn--disabled"]
