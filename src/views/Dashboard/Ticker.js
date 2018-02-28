import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const App = () => (
  <TradingViewWidget
    symbol="NASDAQ:AAPL"
    theme={Themes.DARK}
    locale="fr"
    autosize
  />
);