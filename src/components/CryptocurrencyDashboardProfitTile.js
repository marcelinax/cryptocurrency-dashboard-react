import React from 'react';
import { useSelector } from 'react-redux';

const CryptocurrencyDashboardProfitTile = ({ cryptocurrencies }) => {

	const transferedAmount = useSelector(state => state.transferedAmount.amount);

	const renderProfits = () => {
		return cryptocurrencies.map(cryptocurrency => (
			<div className={'profit-box'}>
				<div className={'arrow-box'}>
					<img src={cryptocurrency.changePercent24Hr > 0 ? '/media/BigGreenArrow.svg' : '/media/BigRedArrow.svg'}/>
				</div>
				<div className={'profit-info-box'}>
					<div className={'profit-info-box-row'}>
						{console.log(transferedAmount)}
						<p style={{ color: cryptocurrency.changePercent24Hr > 0 ? '#00C287' : '#E72D04' }}>$</p>
						<p className={'cryptocurrency'}>{((+cryptocurrency.priceUsd * +transferedAmount).toFixed(2))}</p>
					</div>
					<p className={'cryptocurrency-symbol'}>{cryptocurrency.symbol}</p>
				</div>
			</div>
		));
	};

	return (
		<div className={'cryptocurrency-dashboard-profit-tile cryptocurrency-dashboard-tile'}>
			<h4>Profit</h4>
			<div className={'cryptocurrency-dashboard-profit-tile-info'}>
				{renderProfits()}

			</div>
		</div>
	);
};

export default CryptocurrencyDashboardProfitTile;