document.addEventListener("DOMContentLoaded", function() {
    const curveTextContainer = document.querySelector('.curve-text');

    // Cria o elemento SVG
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("xmlns", svgNS);
    svg.setAttribute("viewBox", "0 0 150 150");
    svg.setAttribute("version", "1.1");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");

    // Cria o caminho circular
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("id", "textPath");
    path.setAttribute("d", "M 75,75 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0");

    // Cria o elemento de texto
    const text = document.createElementNS(svgNS, "text");
    const textPath = document.createElementNS(svgNS, "textPath");
    textPath.setAttribute("href", "#textPath");
    textPath.setAttribute("startOffset", "50%");
    textPath.setAttribute("text-anchor", "middle");
    textPath.textContent = "UX Design Brand e Website";

    // Anexa os elementos juntos
    text.appendChild(textPath);
    svg.appendChild(path);
    svg.appendChild(text);
    curveTextContainer.appendChild(svg);
});
