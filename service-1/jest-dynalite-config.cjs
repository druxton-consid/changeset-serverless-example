// eslint-disable-next-line no-undef
module.exports = {
    tables: [
        {
            TableName: 'TestTable',
            AttributeDefinitions: [
                {
                    AttributeName: 'pk',
                    AttributeType: 'S'
                },
                {
                    AttributeName: 'sk',
                    AttributeType: 'S'
                }
            ],
            KeySchema: [
                {
                    AttributeName: 'pk',
                    KeyType: 'HASH'
                },
                {
                    AttributeName: 'sk',
                    KeyType: 'RANGE'
                }
            ],
            BillingMode: 'PAY_PER_REQUEST'
        }
    ],
    setupFilesAfterEnv: ['jest-dynalite/setupTables', 'jest-dynalite/clearAfterEach']
};
