const assert = require('assert')
const RequestApiHelper = require('./../Helpers/RequestApiHelper')

const URL = `http://localhost:1234`
let MOCK_ID = ''

describe('Deve testar a api rest /products', function() {
    this.beforeAll(async () => {
        const url = URL + `/products/create`;
        response = await RequestApiHelper.callApiPost(url,
            {
                nome: 'Mesa',
                preco: '987'
            }
        )

       MOCK_ID = response.data.data._id;

    })

    it('deve listar os products /products', async () => {
        const url = URL + `/products`;

        response = await RequestApiHelper.callApiGet(url)

        assert.ok(response.data.length >= 1)
        assert.deepEqual(response.status, 200)

    })

    it('deve listar os products por id /products/:id', async () => {
        const url = URL+`/products/${MOCK_ID}`;

        response = await RequestApiHelper.callApiGet(url)

        assert.deepEqual(response.status, 200)
        assert.deepEqual(response.data._id, MOCK_ID)
    })

    it('deve cadastrar um products /product/create', async () => {
        const url = URL + `/products/create`;
        response = await RequestApiHelper.callApiPost(url,
            {
                nome: 'Cadeira',
                preco: '9876'
            }
        )

        assert.deepEqual(response.status, 200)
        assert.deepEqual(response.data.message, 'Product Created successfully')

    })

    it('deve atualizar um products /product/:id/update', async () => {

        const url = URL + `/products/${MOCK_ID}/update`;
        response = await RequestApiHelper.callApiPut(url,
            {
                nome: 'Cadeira Reclinável',
                preco: '987654321'
            }
        )

        assert.deepEqual(response.status, 200)
        assert.deepEqual(response.data, 'Product udpated.')

    })

    it('deve deletar um products /product/:id/delete', async () => {
        const url = URL + `/products/${MOCK_ID}/delete`;
        response = await RequestApiHelper.callApiDelete(url)

        assert.deepEqual(response.status, 200)
        assert.deepEqual(response.data, 'Deleted successfully!')

    })
})