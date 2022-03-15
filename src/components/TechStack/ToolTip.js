import styles from './ToolTip.module.css';

const ToolTip = props => {
  return (
    <div className={styles.tooltip}>
      <p>{props.name}</p>
    </div>
  );
};

export default ToolTip;
