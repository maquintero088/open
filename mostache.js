const searchParams = new URLSearchParams(location.search)
const canvas = (fabric == null || typeof fabric === 'undefined') ? null : new fabric.Canvas('c')
const color = searchParams.get("color") ?? 'black'
const n2_3 = 2 / 3
const y = 20
const top_y_5_3 = y * (1 + n2_3)
const filled_y_figure = {fill: color, top: y}
let top_c = filled_y_figure.top + y*2 - top_y_5_3
let height_c = filled_y_figure.width ?? top_y_5_3
const def_h = 30
const def_l = 50
const def_color = 'green'
let left_c = filled_y_figure.left ?? def_l*2 - y / 2
let width_c = filled_y_figure.height ?? def_h
const mostacho = {
    ...filled_y_figure,
    top: top_c,
    left: left_c,
    height: height_c,
    width: width_c
}
const triangle = function ({fill = def_color, top = y, width = y, height = def_h, left = def_l}) {
    canvas.add(new fabric.Triangle({
        width: width, height: height, fill: fill, left: left, top: top
    }))
}
function circle({radius= y, fill= def_color, left=def_l*2, top=filled_y_figure.top}) {
    return new fabric.Circle({
        radius: radius, fill: fill, left: left, top: top
    })
}
function addMostache(){
    if (canvas == null) {
        return
    }
    triangle(mostacho)
    const thecircle = circle(filled_y_figure)
    canvas.add(thecircle)
    const cicle2 = Object.create(thecircle)
    cicle2.left += cicle2.width
    const left_t = cicle2.left + cicle2.width / 2
    triangle({...mostacho, left: left_t})
    canvas.add(cicle2)
}
addMostache()
