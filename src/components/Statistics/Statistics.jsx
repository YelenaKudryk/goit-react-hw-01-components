import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(({ id, percentage, label }) => (
          <StatisticsItem key={id}>
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPercentage>{percentage}</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
