import type { MockTransactionModel } from '~/types/mocks/statistics';

const days: MockTransactionModel[] = [
    { name: 'Day 1', online: 800, transactions: 900 },
    { name: 'Day 2', online: 1200, transactions: 1100 },
    { name: 'Day 3', online: 700, transactions: 1300 },
    { name: 'Day 4', online: 1500, transactions: 800 },
    { name: 'Day 5', online: 900, transactions: 1600 },
    { name: 'Day 6', online: 1300, transactions: 700 },
    { name: 'Day 7', online: 1100, transactions: 1400 },
    { name: 'Day 8', online: 600, transactions: 900 },
    { name: 'Day 9', online: 1400, transactions: 600 },
    { name: 'Day 10', online: 1250, transactions: 1350 },
    { name: 'Day 11', online: 500, transactions: 1500 },
    { name: 'Day 12', online: 1350, transactions: 650 },
    { name: 'Day 13', online: 800, transactions: 1500 },
    { name: 'Day 14', online: 1450, transactions: 550 },
    { name: 'Day 15', online: 4000, transactions: 6000 },
    { name: 'Day 16', online: 3900, transactions: 3500 },
    { name: 'Day 17', online: 2500, transactions: 2700 },
    { name: 'Day 18', online: 2200, transactions: 2400 },
    { name: 'Day 19', online: 1000, transactions: 1200 },
    { name: 'Day 20', online: 1900, transactions: 2100 },
    { name: 'Day 21', online: 1800, transactions: 800 },
    { name: 'Day 22', online: 700, transactions: 1900 },
    { name: 'Day 23', online: 1600, transactions: 500 },
    { name: 'Day 24', online: 1500, transactions: 1700 },
    { name: 'Day 25', online: 1400, transactions: 600 },
    { name: 'Day 26', online: 1300, transactions: 1500 },
    { name: 'Day 27', online: 1200, transactions: 1400 },
    { name: 'Day 28', online: 1100, transactions: 1300 },
    { name: 'Day 29', online: 1000, transactions: 2200 },
    { name: 'Day 30', online: 900, transactions: 1100 },
];

const weeks: MockTransactionModel[] = [
    { name: 'Week 1', online: 5000, transactions: 5500 },
    { name: 'Week 2', online: 6500, transactions: 4000 },
    { name: 'Week 3', online: 6000, transactions: 7000 },
    { name: 'Week 4', online: 3000, transactions: 8000 },
    { name: 'Week 5', online: 7000, transactions: 2500 },
    { name: 'Week 6', online: 8000, transactions: 9000 },
    { name: 'Week 7', online: 2000, transactions: 8500 },
    { name: 'Week 8', online: 8500, transactions: 3000 },
    { name: 'Week 9', online: 9000, transactions: 9500 },
    { name: 'Week 10', online: 1000, transactions: 10000 },
    { name: 'Week 11', online: 9000, transactions: 2000 },
    { name: 'Week 12', online: 30000, transactions: 35000 },
];

const months: MockTransactionModel[] = [
    { name: 'Jan', online: 15000, transactions: 16000 },
    { name: 'Feb', online: 10000, transactions: 20000 },
    { name: 'Mar', online: 17000, transactions: 8000 },
    { name: 'Apr', online: 18000, transactions: 19000 },
    { name: 'May', online: 9000, transactions: 20000 },
    { name: 'Jun', online: 20000, transactions: 10000 },
    { name: 'Jul', online: 21000, transactions: 22000 },
    { name: 'Aug', online: 11000, transactions: 23000 },
    { name: 'Sep', online: 23000, transactions: 12000 },
    { name: 'Oct', online: 40000, transactions: 42000 },
    { name: 'Nov', online: 32000, transactions: 15000 },
    { name: 'Dec', online: 30000, transactions: 32000 },
];

const years: MockTransactionModel[] = [
    { name: '2014', online: 100000, transactions: 110000 },
    { name: '2015', online: 120000, transactions: 90000 },
    { name: '2016', online: 140000, transactions: 150000 },
    { name: '2017', online: 130000, transactions: 80000 },
    { name: '2018', online: 150000, transactions: 160000 },
    { name: '2019', online: 70000, transactions: 180000 },
    { name: '2020', online: 160000, transactions: 170000 },
    { name: '2021', online: 180000, transactions: 90000 },
    { name: '2022', online: 200000, transactions: 210000 },
    { name: '2023', online: 500000, transactions: 520000 },
];

export const statisticsInitialData = {
    today: days,
    week: weeks,
    month: months,
    year: years,
};
