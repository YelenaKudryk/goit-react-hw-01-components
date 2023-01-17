import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  background-color: ${p => p.theme.colors.white};
  padding-top: ${p => p.theme.spacing(4)};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radius.normal};
`;

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: ${p => p.theme.spacing(4)};
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatisticsItem = styled.li`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(1)};
  padding: ${p => p.theme.spacing(4)};
  background-color: ${getRandomHexColor};

  :nth-of-type(1) {
    border-bottom-left-radius: ${p => p.theme.radius.normal};
  }

  :nth-last-of-type(1) {
    border-bottom-right-radius: ${p => p.theme.radius.normal};
  }
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsLabel = styled.span`
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatisticsPercentage = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
