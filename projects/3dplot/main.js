var W, H, Z, h, i, j, k, nOs;
var Q1, F1, G1;
var l, m, n, s, km;
var Q2, F2, k1, k2, alfa, betta;
var canvas = document.getElementById('canvas');

// Объявления матриц координат осей
var matrIsxOs = matrixArray(6, 4);
var matrIzmOs = matrixArray(6, 4);
var matrOs = matrixArray(6, 4);
// Объявления матриц координат фигур
var matrIsxFg = matrixArray(8, 4);
var matrIzmFg = matrixArray(8, 4);
var matrFg = matrixArray(8, 4);
// Объявления матриц координат проекций
var matrIzmPrX = matrixArray(8, 4);
var matrIzmPrY = matrixArray(8, 4);
var matrIzmPrZ = matrixArray(8, 4);
var matrPrX = matrixArray(8, 4);
var matrPrY = matrixArray(8, 4);
var matrPrZ = matrixArray(8, 4);
var matrTekOs, matrTekFg, Tvid;

// Объявления матриц ортографического преобразования
var TortX = [[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
var TortY = [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
var TortZ = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]];

var Tper = matrixArray(4, 4);   // Матрица переноса
var Tmsb = matrixArray(4, 4);   // Матрица масштабирования

var TkosX = matrixArray(4, 4); // Матрица косоугольного преобраз.на X=0
var TkosY = matrixArray(4, 4); // Матрица косоугольного преобраз.на Y=0
var TkosZ = matrixArray(4, 4); // Матрица косоугольного преобраз.на Z=0

var TvrYOs = matrixArray(4, 4); // Матрица вращения относительно оси Y
var TvrXOs = matrixArray(4, 4); // Матрица вращения относительно оси X

// Объявления результирующих матриц преобразования
var TrezOs = matrixArray(4, 4);
var TrezFg = matrixArray(4, 4);
var TrezPrZ = matrixArray(4, 4);
var TrezPrX = matrixArray(4, 4);
var TrezPrY = matrixArray(4, 4);

var TvrYFg = matrixArray(4, 4) // матрица вращения фигуры относительно локальной оси Y;
var TvrXFg = matrixArray(4, 4) // матрица вращения фигуры относительно локальной оси X;
var TvrZFg = matrixArray(4, 4) //матрица вращения фигуры относительно локальной оси Z;

//          // Прототипы функций преобразования объектов
// static void GrafKonv(void);
// static void IzmOsi(void);
// static void IzmFig(void);
// static void IzmPro(void);

//          // Прототипы функций вычисления результирующих матриц
// static void RezMatrOs(void);
// static void RezMatrFg(void);
// static void RezMatrPr(void);

//          // Прототипы функций вычисления и преобразования координат объектов
// static void MultMatr(float Matr1[4][4],float Matr2[4][4],float Matr3[4][4]);
// static void Preobr(int rows,float MatrIsx[][4],float MatrRez[4][4],float MatrIzm[][4]);
// static void Normir(int rows, float MatrIzm[][4],float MatrTek[][4]);

//          // Прототипы функций прорисовки объектов
// static void ShowAll(void);
// static void ShowOsi(void);
// static void ShowFig(void);
// static void ShowPro(float matrPr[8][4]);
// static void ShowLuthi(float matrPr[8][4]);
// static void Oboznath(void);

// static void InitTvrY(void)
// static void InitTvrX(void)
// static void InitTvrZ(void)
formCreate();
main();
function formCreate() {
    W = 500;
    H = 500;

    k2 = Math.PI / 180;
    l = 0;
    m = 0;
    n = 0;
    s = 1;
    alfa = 0;
    nOs = 10;
    h = W / (2 * (nOs + 1));

    matrIsxOs[0][0] = -nOs; matrIsxOs[0][1] = 0; matrIsxOs[0][2] = 0; matrIsxOs[0][3] = 1;
    matrIsxOs[1][0] = nOs; matrIsxOs[1][1] = 0; matrIsxOs[1][2] = 0; matrIsxOs[1][3] = 1;
    matrIsxOs[2][0] = 0; matrIsxOs[2][1] = -nOs; matrIsxOs[2][2] = 0; matrIsxOs[2][3] = 1;
    matrIsxOs[3][0] = 0; matrIsxOs[3][1] = nOs; matrIsxOs[3][2] = 0; matrIsxOs[3][3] = 1;
    matrIsxOs[4][0] = 0; matrIsxOs[4][1] = 0; matrIsxOs[4][2] = -nOs; matrIsxOs[4][3] = 1;
    matrIsxOs[5][0] = 0; matrIsxOs[5][1] = 0; matrIsxOs[5][2] = nOs; matrIsxOs[5][3] = 1;

    matrIsxFg[0][0] = 0; matrIsxFg[0][1] = 0; matrIsxFg[0][2] = 0; matrIsxFg[0][3] = 1;
    matrIsxFg[1][0] = 0; matrIsxFg[1][1] = 4; matrIsxFg[1][2] = 0; matrIsxFg[1][3] = 1;
    matrIsxFg[2][0] = 4; matrIsxFg[2][1] = 4; matrIsxFg[2][2] = 0; matrIsxFg[2][3] = 1;
    matrIsxFg[3][0] = 4; matrIsxFg[3][1] = 0; matrIsxFg[3][2] = 0; matrIsxFg[3][3] = 1;
    matrIsxFg[4][0] = 0; matrIsxFg[4][1] = 0; matrIsxFg[4][2] = 4; matrIsxFg[4][3] = 1;
    matrIsxFg[5][0] = 0; matrIsxFg[5][1] = 4; matrIsxFg[5][2] = 4; matrIsxFg[5][3] = 1;
    matrIsxFg[6][0] = 4; matrIsxFg[6][1] = 4; matrIsxFg[6][2] = 4; matrIsxFg[6][3] = 1;
    matrIsxFg[7][0] = 4; matrIsxFg[7][1] = 0; matrIsxFg[7][2] = 4; matrIsxFg[7][3] = 1;


    Tper[0][0] = 1; Tper[0][1] = 0; Tper[0][2] = 0; Tper[0][3] = 0;
    Tper[1][0] = 0; Tper[1][1] = 1; Tper[1][2] = 0; Tper[1][3] = 0;
    Tper[2][0] = 0; Tper[2][1] = 0; Tper[2][2] = 1; Tper[2][3] = 0;
    Tper[3][0] = l; Tper[3][1] = m; Tper[3][2] = n; Tper[3][3] = 1;

    Tmsb[0][0] = 1; Tmsb[0][1] = 0; Tmsb[0][2] = 0; Tmsb[0][3] = 0;
    Tmsb[1][0] = 0; Tmsb[1][1] = 1; Tmsb[1][2] = 0; Tmsb[1][3] = 0;
    Tmsb[2][0] = 0; Tmsb[2][1] = 0; Tmsb[2][2] = 1; Tmsb[2][3] = 0;
    Tmsb[3][0] = 0; Tmsb[3][1] = 0; Tmsb[3][2] = 0; Tmsb[3][3] = s;

    Q2 = 30;
    F2 = 30;

    TvrYOs[0][0] = Math.cos(k2 * Q2); TvrYOs[0][1] = 0; TvrYOs[0][2] = -Math.sin(k2 * Q2); TvrYOs[0][3] = 0;
    TvrYOs[1][0] = 0; TvrYOs[1][1] = 1; TvrYOs[1][2] = 0; TvrYOs[1][3] = 0;
    TvrYOs[2][0] = Math.sin(k2 * Q2); TvrYOs[2][1] = 0; TvrYOs[2][2] = Math.cos(k2 * Q2); TvrYOs[2][3] = 0;
    TvrYOs[3][0] = 0; TvrYOs[3][1] = 0; TvrYOs[3][2] = 0; TvrYOs[3][3] = 1;

    TvrXOs[0][0] = 1; TvrXOs[0][1] = 0; TvrXOs[0][2] = 0; TvrXOs[0][3] = 0;
    TvrXOs[1][0] = 0; TvrXOs[1][1] = Math.cos(k2 * F2); TvrXOs[1][2] = Math.sin(k2 * F2); TvrXOs[1][3] = 0;
    TvrXOs[2][0] = 0; TvrXOs[2][1] = -Math.sin(k2 * F2); TvrXOs[2][2] = Math.cos(k2 * F2); TvrXOs[2][3] = 0;
    TvrXOs[3][0] = 0; TvrXOs[3][1] = 0; TvrXOs[3][2] = 0; TvrXOs[3][3] = 1;

    InitTvrY();
    InitTvrX();
    InitTvrZ();
}

function GrafKonv() {
    IzmOsi();
    IzmFig();
    IzmPro();
    ShowAll();
}

function main() {
    GrafKonv();
}

function ShowAll() {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ShowOsi(ctx);
    ShowPro(matrPrZ, ctx);
    ShowLuthi(matrPrZ,ctx);
    // ShowPro(matrPrX, ctx);
    // ShowLuthi(matrPrX,ctx);
    // ShowPro(matrPrY, ctx);
    // ShowLuthi(matrPrY,ctx);
    ShowFig(ctx);
}

function IzmOsi() {
    RezMatrOs();
    Preobr(6, matrIsxOs, TrezOs, matrIzmOs);
    matrTekOs = Normir(6, matrIzmOs, matrTekOs);
}

function RezMatrOs() {
    var T1 = matrixArray(4, 4);
    MultMatr(TvrYOs, TvrXOs, T1);
    MultMatr(T1, TortZ, TrezOs);
}

function MultMatr(Matr1, Matr2, Matr3) {
    var Sum;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            Sum = 0;
            for (var k = 0; k < 4; k++)
                Sum = Sum + Matr1[i][k] * Matr2[k][j];
            Matr3[i][j] = Sum;
        }
    }
}

function Preobr(rows, MatrIsx, MatrRez, MatrIzm) {
    var Sum;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < 4; j++) {
            Sum = 0;
            for (var k = 0; k < 4; k++)
                Sum = Sum + MatrIsx[i][k] * MatrRez[k][j];
            MatrIzm[i][j] = Sum;
        }
    }
}

function Normir(rows, MatrIzm, MatrTek) {
    MatrTek = matrixArray(rows, 4)
    for (var i = 0; i < rows; i++)
        for (var j = 0; j < 4; j++) {
            if (MatrIzm[i][3] != 1) {
                if (MatrIzm[i][3] == 0)
                    MatrIzm[i][3] = 0.001;
                MatrTek[i][j] = MatrIzm[i][j] / MatrIzm[i][3];
            }
            else MatrTek[i][j] = MatrIzm[i][j];
        }
    return MatrTek;
}

function onAxesChangeQ() {
    Q2 = +document.getElementById('q2').value;
    document.getElementById('q2Value').textContent = Q2;

    TvrYOs[0][0] = Math.cos(k2 * Q2); TvrYOs[0][1] = 0; TvrYOs[0][2] = -Math.sin(k2 * Q2); TvrYOs[0][3] = 0;
    TvrYOs[1][0] = 0; TvrYOs[1][1] = 1; TvrYOs[1][2] = 0; TvrYOs[1][3] = 0;
    TvrYOs[2][0] = Math.sin(k2 * Q2); TvrYOs[2][1] = 0; TvrYOs[2][2] = Math.cos(k2 * Q2); TvrYOs[2][3] = 0;
    TvrYOs[3][0] = 0; TvrYOs[3][1] = 0; TvrYOs[3][2] = 0; TvrYOs[3][3] = 1;

    main();
}

function onAxesChangeF() {
    F2 = +document.getElementById('f2').value;
    document.getElementById('f2Value').textContent = F2;

    TvrXOs[0][0] = 1; TvrXOs[0][1] = 0; TvrXOs[0][2] = 0; TvrXOs[0][3] = 0;
    TvrXOs[1][0] = 0; TvrXOs[1][1] = Math.cos(k2 * F2); TvrXOs[1][2] = Math.sin(k2 * F2); TvrXOs[1][3] = 0;
    TvrXOs[2][0] = 0; TvrXOs[2][1] = -Math.sin(k2 * F2); TvrXOs[2][2] = Math.cos(k2 * F2); TvrXOs[2][3] = 0;
    TvrXOs[3][0] = 0; TvrXOs[3][1] = 0; TvrXOs[3][2] = 0; TvrXOs[3][3] = 1;

    main();
}

function IzmFig() {
    RezMatrFg();                          // Вычисл.рез.матрицы преобраз. фиг.
    Preobr(8, matrIsxFg, TrezFg, matrIzmFg); // Преобразование координат фигуры
    matrTekFg = Normir(8, matrIzmFg, matrTekFg);        // Нормировка координат фигуры
}

function RezMatrFg() {
    var T1 = matrixArray(4, 4);
    var T2 = matrixArray(4, 4);
    var T3 = matrixArray(4, 4);
    Tvid = matrixArray(4, 4);
    MultMatr(TvrYFg, TvrXFg, T1);
    MultMatr(T1, TvrZFg, T2);
    MultMatr(Tper, Tmsb, T3);            // 1-я промежуточн. матр. преобр.фиг.
    MultMatr(T2, T3, Tvid);
    MultMatr(Tvid, TrezOs, TrezFg);        // Результирующая матрица преобр.фиг.
}

function onZoomChange() {
    km = 0.1;
    var position = +document.getElementById('zoom').value;
    s = km * position;
    document.getElementById('zoomValue').textContent = (1 / s).toFixed(1);
    Tmsb[3][3] = s;

    main();
}

function onTranslateX() {
    l = +document.getElementById('translateX').value;
    document.getElementById('translateXValue').textContent = l;
    Tper[3][0] = l;

    main();
}

function onTranslateY() {
    m = +document.getElementById('translateY').value;
    document.getElementById('translateYValue').textContent = m;
    Tper[3][1] = m;

    main();
}

function onTranslateZ() {
    n = +document.getElementById('translateZ').value;
    document.getElementById('translateZValue').textContent = n;
    Tper[3][2] = n;

    main();
}

function ShowOsi(ctx) {
    ctx.strokeStyle = 'rgb(182,182,182)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W / 2 + Math.floor(h * matrTekOs[0][0]), H / 2 - Math.floor(h * matrTekOs[0][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekOs[1][0]), H / 2 - Math.floor(h * matrTekOs[1][1]));
    // рисуем ось Y
    ctx.moveTo(W / 2 + Math.floor(h * matrTekOs[2][0]), H / 2 - Math.floor(h * matrTekOs[2][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekOs[3][0]), H / 2 - Math.floor(h * matrTekOs[3][1]));
    // рисуем ось Z
    ctx.moveTo(W / 2 + Math.floor(h * matrTekOs[4][0]), H / 2 - Math.floor(h * matrTekOs[4][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekOs[5][0]), H / 2 - Math.floor(h * matrTekOs[5][1]));
    ctx.closePath();
    ctx.stroke();

    // устанавливаем обозначения осей:

    ctx.fillText('X', W / 2 + Math.floor(h * matrTekOs[1][0]),
        H / 2 - Math.floor(h * matrTekOs[1][1]) - 20);

    ctx.fillText('Y', W / 2 + Math.floor(h * matrTekOs[3][0]) + 10,
        H / 2 - Math.floor(h * matrTekOs[3][1]));

    ctx.fillText('Z', W / 2 + Math.floor(h * matrTekOs[5][0]),
        H / 2 - Math.floor(h * matrTekOs[5][1]) - 20);
}

function ShowFig(ctx) {
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    //рисуем линию AB
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[0][0]), H / 2 - Math.floor(h * matrTekFg[0][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[1][0]), H / 2 - Math.floor(h * matrTekFg[1][1]));
    //рисуем линию BC
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[1][0]), H / 2 - Math.floor(h * matrTekFg[1][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[2][0]), H / 2 - Math.floor(h * matrTekFg[2][1]));
    //рисуем линию CD
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[2][0]), H / 2 - Math.floor(h * matrTekFg[2][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[3][0]), H / 2 - Math.floor(h * matrTekFg[3][1]));
    //рисуем линию DA
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[3][0]), H / 2 - Math.floor(h * matrTekFg[3][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[0][0]), H / 2 - Math.floor(h * matrTekFg[0][1]));
    //рисуем линию AE
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[0][0]), H / 2 - Math.floor(h * matrTekFg[0][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[4][0]), H / 2 - Math.floor(h * matrTekFg[4][1]));
    //рисуем линию EF
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[4][0]), H / 2 - Math.floor(h * matrTekFg[4][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[5][0]), H / 2 - Math.floor(h * matrTekFg[5][1]));
    //рисуем линию FB
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[5][0]), H / 2 - Math.floor(h * matrTekFg[5][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[1][0]), H / 2 - Math.floor(h * matrTekFg[1][1]));
    //рисуем линию EH
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[4][0]), H / 2 - Math.floor(h * matrTekFg[4][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[7][0]), H / 2 - Math.floor(h * matrTekFg[7][1]));
    //рисуем линию HG
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[7][0]), H / 2 - Math.floor(h * matrTekFg[7][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[6][0]), H / 2 - Math.floor(h * matrTekFg[6][1]));
    //рисуем линию HD
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[7][0]), H / 2 - Math.floor(h * matrTekFg[7][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[3][0]), H / 2 - Math.floor(h * matrTekFg[3][1]));
    //рисуем линию GC
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[6][0]), H / 2 - Math.floor(h * matrTekFg[6][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[2][0]), H / 2 - Math.floor(h * matrTekFg[2][1]));
    //рисуем линию FG
    ctx.moveTo(W / 2 + Math.floor(h * matrTekFg[5][0]), H / 2 - Math.floor(h * matrTekFg[5][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrTekFg[6][0]), H / 2 - Math.floor(h * matrTekFg[6][1]));

    ctx.closePath();
    ctx.stroke();
}

function InitTvrY() {
    Q1 = +document.getElementById('translateAngleY').value;
    document.getElementById('translateAngleYValue').textContent = Q1;
    TvrYFg[0][0] = Math.cos(k2 * Q1); TvrYFg[0][1] = 0; TvrYFg[0][2] = -Math.sin(k2 * Q1); TvrYFg[0][3] = 0;
    TvrYFg[1][0] = 0; TvrYFg[1][1] = 1; TvrYFg[1][2] = 0; TvrYFg[1][3] = 0;
    TvrYFg[2][0] = Math.sin(k2 * Q1); TvrYFg[2][1] = 0; TvrYFg[2][2] = Math.cos(k2 * Q1); TvrYFg[2][3] = 0;
    TvrYFg[3][0] = 0; TvrYFg[3][1] = 0; TvrYFg[3][2] = 0; TvrYFg[3][3] = 1;
}

function InitTvrX() {
    F1 = +document.getElementById('translateAngleX').value;
    document.getElementById('translateAngleXValue').textContent = F1;
    TvrXFg[0][0] = 1; TvrXFg[0][1] = 0; TvrXFg[0][2] = 0; TvrXFg[0][3] = 0;
    TvrXFg[1][0] = 0; TvrXFg[1][1] = Math.cos(k2 * F1); TvrXFg[1][2] = Math.sin(k2 * F1); TvrXFg[1][3] = 0;
    TvrXFg[2][0] = 0; TvrXFg[2][1] = -Math.sin(k2 * F1); TvrXFg[2][2] = Math.cos(k2 * F1); TvrXFg[2][3] = 0;
    TvrXFg[3][0] = 0; TvrXFg[3][1] = 0; TvrXFg[3][2] = 0; TvrXFg[3][3] = 1;
}

function InitTvrZ() {
    G1 = +document.getElementById('translateAngleZ').value;
    document.getElementById('translateAngleZValue').textContent = G1;
    TvrZFg[0][0] = Math.cos(k2 * G1); TvrZFg[0][1] = -Math.sin(k2 * G1); TvrZFg[0][2] = 0; TvrZFg[0][3] = 0;
    TvrZFg[1][0] = Math.sin(k2 * G1); TvrZFg[1][1] = Math.cos(k2 * G1); TvrZFg[1][2] = 0; TvrZFg[1][3] = 0;
    TvrZFg[2][0] = 0; TvrZFg[2][1] = 0; TvrZFg[2][2] = 1; TvrZFg[2][3] = 0;
    TvrZFg[3][0] = 0; TvrZFg[3][1] = 0; TvrZFg[3][2] = 0; TvrZFg[3][3] = 1;
}

function onTranslateAngleY() {
    Q1 = +document.getElementById('translateAngleY').value;
    document.getElementById('translateAngleYValue').textContent = Q1;
    InitTvrY();

    main();
}

function onTranslateAngleX() {
    F1 = +document.getElementById('translateAngleX').value;
    document.getElementById('translateAngleXValue').textContent = F1;
    InitTvrX();

    main();
}

function onTranslateAngleZ() {
    G1 = +document.getElementById('translateAngleZ').value;
    document.getElementById('translateAngleZValue').textContent = G1;
    InitTvrZ();

    main();
}

function IzmPro() {
    RezMatrPr();                // Вычисление рез. матриц преобразования проекц.
    Preobr(8, matrIsxFg, TrezPrX, matrIzmPrX);// Преобразование координат проекц.X
    Preobr(8, matrIsxFg, TrezPrY, matrIzmPrY);// Преобразование координат проекц.Y
    Preobr(8, matrIsxFg, TrezPrZ, matrIzmPrZ);// Преобразование координат проекц.Z

    matrPrX = Normir(8, matrIzmPrX, matrPrX);          // Нормировка координат проекции X
    matrPrY = Normir(8, matrIzmPrY, matrPrY);          // Нормировка координат проекции Y
    matrPrZ = Normir(8, matrIzmPrZ, matrPrZ);          // Нормировка координат проекции Z
}

function RezMatrPr() {
    var Tx = matrixArray(4, 4), Ty = matrixArray(4, 4), Tz = matrixArray(4, 4);

    MultMatr(Tvid, TortX, Tx);        // Промежуточн. матр. преобр. проекц. X
    MultMatr(Tvid, TortY, Ty);        // Промежуточн. матр. преобр. проекц. Y
    MultMatr(Tvid, TortZ, Tz);        // Промежуточн. матр. преобр. проекц. Z

    MultMatr(Tx, TrezOs, TrezPrX); // Результирующая матрица преобр.проекц.X
    MultMatr(Ty, TrezOs, TrezPrY); // Результирующая матрица преобр.проекц.Y
    MultMatr(Tz, TrezOs, TrezPrZ); // Результирующая матрица преобр.проекц.Z
}

function ShowPro(matrPr, ctx) {
    ctx.strokeStyle = 'rgb(208,152,0)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    //рисуем линию AB
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[0][0]), H / 2 - Math.floor(h * matrPr[0][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[1][0]), H / 2 - Math.floor(h * matrPr[1][1]));

    //рисуем линию BC
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[1][0]), H / 2 - Math.floor(h * matrPr[1][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[2][0]), H / 2 - Math.floor(h * matrPr[2][1]));

    //рисуем линию CD
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[2][0]), H / 2 - Math.floor(h * matrPr[2][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[3][0]), H / 2 - Math.floor(h * matrPr[3][1]));

    //рисуем линию DA
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[3][0]), H / 2 - Math.floor(h * matrPr[3][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[0][0]), H / 2 - Math.floor(h * matrPr[0][1]));
    //рисуем линию AE
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[0][0]), H / 2 - Math.floor(h * matrPr[0][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[4][0]), H / 2 - Math.floor(h * matrPr[4][1]));
    //рисуем линию EF
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[4][0]), H / 2 - Math.floor(h * matrPr[4][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[5][0]), H / 2 - Math.floor(h * matrPr[5][1]));
    //рисуем линию FB
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[5][0]), H / 2 - Math.floor(h * matrPr[5][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[1][0]), H / 2 - Math.floor(h * matrPr[1][1]));
    //рисуем линию EH
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[4][0]), H / 2 - Math.floor(h * matrPr[4][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[7][0]), H / 2 - Math.floor(h * matrPr[7][1]));
    //рисуем линию HG
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[7][0]), H / 2 - Math.floor(h * matrPr[7][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[6][0]), H / 2 - Math.floor(h * matrPr[6][1]));
    //рисуем линию HD
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[7][0]), H / 2 - Math.floor(h * matrPr[7][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[3][0]), H / 2 - Math.floor(h * matrPr[3][1]));
    //рисуем линию GC
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[6][0]), H / 2 - Math.floor(h * matrPr[6][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[2][0]), H / 2 - Math.floor(h * matrPr[2][1]));
    //рисуем линию FG
    ctx.moveTo(W / 2 + Math.floor(h * matrPr[5][0]), H / 2 - Math.floor(h * matrPr[5][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[6][0]), H / 2 - Math.floor(h * matrPr[6][1]));

    ctx.closePath();
    ctx.stroke();
}

function ShowLuthi(matrPr,ctx) {
    ctx.strokeStyle = 'rgb(223,198,130)';
    ctx.setLineDash([4, 10]);
    ctx.lineDashOffset = 2;
    ctx.beginPath();
    matrFg = matrTekFg;
    //рисуем луч A
    ctx.moveTo(W / 2 + Math.floor(h * matrFg[0][0]), H / 2 - Math.floor(h * matrFg[0][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[0][0]), H / 2 - Math.floor(h * matrPr[0][1]));

    //рисуем луч B
    ctx.moveTo(W / 2 + Math.floor(h * matrFg[1][0]), H / 2 - Math.floor(h * matrFg[1][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[1][0]), H / 2 - Math.floor(h * matrPr[1][1]));

    //рисуем луч C
    ctx.moveTo(W / 2 + Math.floor(h * matrFg[2][0]), H / 2 - Math.floor(h * matrFg[2][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[2][0]), H / 2 - Math.floor(h * matrPr[2][1]));

    //рисуем луч D
    ctx.moveTo(W / 2 + Math.floor(h * matrFg[3][0]), H / 2 - Math.floor(h * matrFg[3][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[3][0]), H / 2 - Math.floor(h * matrPr[3][1]));
    //рисуем луч E
    ctx.moveTo(W / 2 + Math.floor(h * matrFg[4][0]), H / 2 - Math.floor(h * matrFg[4][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[4][0]), H / 2 - Math.floor(h * matrPr[4][1]));
    //рисуем луч F
    ctx.moveTo(W / 2 + Math.floor(h * matrFg[5][0]), H / 2 - Math.floor(h * matrFg[5][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[5][0]), H / 2 - Math.floor(h * matrPr[5][1]));
    //рисуем луч G
    ctx.moveTo(W / 2 + Math.floor(h * matrFg[6][0]), H / 2 - Math.floor(h * matrFg[6][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[6][0]), H / 2 - Math.floor(h * matrPr[6][1]));
    //рисуем луч H
    ctx.moveTo(W / 2 + Math.floor(h * matrFg[7][0]), H / 2 - Math.floor(h * matrFg[7][1]));
    ctx.lineTo(W / 2 + Math.floor(h * matrPr[7][0]), H / 2 - Math.floor(h * matrPr[7][1]));

    ctx.setLineDash([]);
    ctx.stroke();
    ctx.closePath();
}

function matrixArray(rows, columns) {
    var arr = new Array();
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array();
        for (var j = 0; j < columns; j++) {
            arr[i][j] = null;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
        }
    }
    return arr;
}