class CurrencyConverter extends React.Component {
  state = {
    currency: this.props.currencies[0].name,
    value: 0,
  }

  onChange = ({ target: { value, dataset: { currency } } }) => {
    this.setState({
      currency,
      value,
    });
  }

  render() {
    const { currency, value } = this.state;

    return (
      <div>
        {this.props.currencies.map(n => (
          <div>
            {n.name}:
            <input
              data-currency={n.name}
              value={currency === n.name ? value : (value * n.rate).toFixed(2)}
              onChange={this.onChange}
            />
          </div>
        ))}
      </div>
    );
  }
}


ReactDOM.render(
  <CurrencyConverter
    currencies={[
      { name: 'RUB', rate: 1 },
      { name: 'USD', rate: 0.013433637829124127 },
      { name: 'EUR', rate: 0.011065619121389841 },
    ]}
  />,
  document.getElementById('app')
);

