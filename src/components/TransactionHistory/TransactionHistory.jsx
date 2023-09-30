import styles from './TransactionHistory.module.css'

export const TransactionHistory = ({ item }) => {
    return (
   <section>   
    <table className={styles.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>{item.map(({ id, type, amount, currency }) => (
            <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            </tr>
        ))}
        </tbody>
    </table>
   </section>           
    );
};

