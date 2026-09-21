document.addEventListener("webviewerloaded", () => {
    const options =
        window.PDFViewerApplicationOptions;

    const {
        ScrollMode,
        SpreadMode
    } = window.PDFViewerApplicationConstants;

    // 每次打开 PDF 时，强制采用普通纵向单列阅读。
    options.set(
        "scrollModeOnLoad",
        ScrollMode.VERTICAL
    );

    // 每次打开 PDF 时，强制关闭双页 / 跨页视图。
    options.set(
        "spreadModeOnLoad",
        SpreadMode.NONE
    );
});