'use strict'

const arduApi = require('api')

arduApi.url = 'http://192.168.1.36:5000/api'
//arduApi.url = 'https://immense-atoll-60872.herokuapp.com/api'

const logic = {
    userId: 'NO-ID',

    registerUser(name, surname, email, password) {
        return arduApi.registerUser(name, surname, email, password)
            .then(data => data)
            .catch(err => err.message)
    },

    login(email, password) {
        return arduApi.authenticateUser(email, password)
            .then(data => {
                this.userId = data.data.id

                return data
            })
            .catch(err => err.message)

    },

    retrieveUser(userId, token) {
        arduApi.token = token
        return arduApi.retrieveUser(userId).then(data => data).catch(err => err.message)
    },

    updateUser(id, token, name, surname, password, email, picture_url) {
        arduApi.token = token
        return arduApi.updateUser(id, name, surname, email, password, picture_url, email, password)
            .then(data => data).catch(err => err.message)
    },

    unregisterUser(email, password, token, id) {
        arduApi.token = token

        return arduApi.unregisterUser(id, email, password)
            .then(data => data).catch(err => err.message)
    },

    addArduino(userId, ip, port) {
        return arduApi.addArduino(userId, ip, port)
            .then(data => data).catch(err => err.message)
    },

    listArduinos(userId, token) {
        arduApi.token = token
        return arduApi.listArduinos(userId)
            .then(data => data).catch(err => err.message)
    },

    removeArduino(userId, arduId, token) {
        arduApi.token = token
        return arduApi.removeArduino(userId, arduId)
    },

    addArduinoData(userId, arduId, value) {

        return arduApi.addArduinoData(userId, arduId, value)
    },

    retrieveArduinoData(userId, arduId, token) {
        arduApi.token = token
        return arduApi.retrieveArduinoData(userId, arduId, token)
            .then(data => data).catch(err => err.message)
    },

    controlArduino(userId, arduId, q, ip) {
        return arduApi.controlArduino(userId, arduId, q, ip)
    },

    removeArduinoData(userId, arduId) {
        return arduApi.removeArduinoData(userId, arduId)
            .then(data => data).catch(err => err.message)
    },

    sendOutput(userId, arduId, q, ip, pin) {
        return arduApi.sendOutput(userId, arduId, q, ip, pin)
    },

    convertArrayOfObjectsToCSV(args) {  
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    },

    downloadCSV(args,arr) {
        var data, filename, link;
        var csv = this.convertArrayOfObjectsToCSV({
            data: arr
        });
        if (csv == null) return;

        filename = args.filename || 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }
}

export default logic