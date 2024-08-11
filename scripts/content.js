const predefineSymbols = ["ABB", "ACC", "AUBANK", "AARTIIND", "ABBOTINDIA", "ADANIENT", "ADANIPORTS", "ABCAPITAL", "ABFRL", "ALKEM", "AMBUJACEM", "APOLLOHOSP", "APOLLOTYRE", "ASHOKLEY", "ASIANPAINT", "ASTRAL", "ATUL", "AUROPHARMA", "AXISBANK", "BSOFT", "BAJAJ-AUTO", "BAJFINANCE", "BAJAJFINSV", "BALKRISIND", "BALRAMCHIN", "BANDHANBNK", "BANKBARODA", "BATAINDIA", "BERGEPAINT", "BEL", "BHARATFORG", "BHEL", "BPCL", "BHARTIARTL", "BIOCON", "BOSCHLTD", "BRITANNIA", "CANFINHOME", "CANBK", "CHAMBLFERT", "CHOLAFIN", "CIPLA", "CUB", "COALINDIA", "COFORGE", "COLPAL", "CONCOR", "COROMANDEL", "CROMPTON", "CUMMINSIND", "DLF", "DABUR", "DALBHARAT", "DEEPAKNTR", "DIVISLAB", "DIXON", "LALPATHLAB", "DRREDDY", "EICHERMOT", "ESCORTS", "EXIDEIND", "GAIL", "GMRINFRA", "GLENMARK", "GODREJCP", "GODREJPROP", "GRANULES", "GRASIM", "GUJGASLTD", "GNFC", "HCLTECH", "HDFCAMC", "HDFCBANK", "HDFCLIFE", "HAVELLS", "HEROMOTOCO", "HINDALCO", "HAL", "HINDCOPPER", "HINDPETRO", "HINDUNILVR", "ICICIBANK", "ICICIGI", "ICICIPRULI", "IDFCFIRSTB", "IDFC", "IPCALAB", "ITC", "INDIAMART", "IEX", "IOC", "IRCTC", "IGL", "INDUSTOWER", "INDUSINDBK", "NAUKRI", "INFY", "INDIGO", "JKCEMENT", "JSWSTEEL", "JINDALSTEL", "JUBLFOOD", "KOTAKBANK", "LTF", "LTTS", "LICHSGFIN", "LTIM", "LT", "LAURUSLABS", "LUPIN", "MRF", "MGL", "M&MFIN", "M&M", "MANAPPURAM", "MARICO", "MARUTI", "MFSL", "METROPOLIS", "MPHASIS", "MCX", "MUTHOOTFIN", "NMDC", "NTPC", "NATIONALUM", "NAVINFLUOR", "NESTLEIND", "OBEROIRLTY", "ONGC", "OFSS", "PIIND", "PVRINOX", "PAGEIND", "PERSISTENT", "PETRONET", "PIDILITIND", "PEL", "POLYCAB", "PFC", "POWERGRID", "PNB", "RBLBANK", "RECLTD", "RELIANCE", "SBICARD", "SBILIFE", "SHREECEM", "SRF", "MOTHERSON", "SHRIRAMFIN", "SIEMENS", "SBIN", "SAIL", "SUNPHARMA", "SUNTV", "SYNGENE", "TATACONSUM", "TVSMOTOR", "TATACHEM", "TATACOMM", "TCS", "TATAMOTORS", "TATAPOWER", "TATASTEEL", "TECHM", "FEDERALBNK", "INDIACEM", "INDHOTEL", "RAMCOCEM", "TITAN", "TORNTPHARM", "TRENT", "UPL", "ULTRACEMCO", "UBL", "UNITDSPR", "VEDL", "IDEA", "VOLTAS", "WIPRO", "ZYDUSLIFE"];

const newBaseUrl = "https://www.tradingview.com/chart/?symbol=NSE:"
let idx = 0;
function modifyLinks() {

    //const links = document.querySelectorAll('a[href*="nseindia.com"]');
    const links = document.querySelectorAll('a');
    alert(links.length);
    links.forEach(link => {
        const href = link.href || '';
        console.log(href);
        if (href.includes('nseindia.com/get-quotes/equity?symbol=')) {
            const url = new URL(link.href);

            const symbol = url.searchParams.get("symbol");
            if (predefineSymbols.includes(symbol)) {
                link.href = `${newBaseUrl}${symbol}`;
                link.style.backgroundColor = "yellow";
            }
        }

    });
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "modifyLinks") {
        modifyLinks();
    }
});
