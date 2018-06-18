'use strict'

const { models: { User, Apartment, Task, Note, Market } } = require('data')

const logic = {

    /**
     * 
     * @param {string} name 
     * @param {string} surname 
     * @param {string} phone
     * @param {string} dni
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */

    registerUser(name, surname, phone, dni, password, apartmentId) {
        return Promise.resolve()
            .then(() => {

                if (typeof name !== 'string') throw Error('name is not a string')

                if (!(name = name.trim()).length) throw Error('name is empty or blank')

                if (typeof surname !== 'string') throw Error('surname is not a string')

                if (!(surname = surname.trim())) throw Error('surname is empty or blank')

                if (typeof phone !== 'string') throw Error('phone is not a string')

                if ((phone = phone.trim()).length === 0) throw Error('phone is empty or blank')

                if (typeof dni !== 'string') throw Error('dni is not a string')

                if ((dni = dni.trim()).length === 0) throw Error('dni is empty or blank')

                if (typeof password !== 'string') throw Error('password is not a string')

                if ((password = password.trim()).length === 0) throw Error('password is empty or blank')

                if (typeof apartmentId !== 'string') throw Error('apartmentId is not a string')

                if ((apartmentId = apartmentId.trim()).length === 0) throw Error('apartmentId is empty or blank')

                return User.findOne({ dni })
                    .then(user => {


                        if (user) throw Error(`user with dni ${dni} already exists`)

                        return User.create({ name, surname, phone, dni, password, apartmentId })
                            .then(() => true)
                    })
            })
    },

    /**
     * 
     * @param {string} dni
     * @param {string} password 
     * 
     * @returns {Promise<string>}
     */
    authenticateUser(dni, password) {
        return Promise.resolve()
            .then(() => {

                if (typeof dni !== 'string') throw Error('user dni is not a string')

                if (!(dni = dni.trim()).length) throw Error('user dni is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ dni, password })
                    .then(user => {


                        if (!user) throw Error('wrong credentials')

                        return { id: user.id, apartmentId: user.apartmentId }
                    })
            })
    },

    /**
    * 
    * @param {string} id
    * 
    * @returns {Promise<User>} 
    */
    retrieveUser(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                return User.findById(id).select({ _id: 0, name: 1, surname: 1, phone: 1, dni: 1 })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${id}`)

                return user
            })
    },
    /**
    * 
    * @param {string} id 
    * @param {string} name 
    * @param {string} surname 
    * @param {string} phone
    * @param {string} dni
    * @param {string} password 
    * @param {string} newPhone
    * @param {string} newPassword 
    * 
    * @returns {Promise<boolean>}
    */
    updateUser(id, name, surname, phone, dni, password, newPassword,  ) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof surname !== 'string') throw Error('user surname is not a string')

                if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

                if (typeof phone !== 'string') throw Error('user phone is not a string')

                if (!(phone = phone.trim()).length) throw Error('user phone is empty or blank')

                if (typeof dni !== 'string') throw Error('user dni is not a string')

                if (!(dni = dni.trim()).length) throw Error('user dni is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findById(id )
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                return user
            })
            .then(user => {
                user.name = name
                user.surname = surname
                user.phone=phone
                user.dni=dni
                user.password = newPassword ? newPassword : password

                return user.save()
            })
            .then(() => true)
    },

    relateUserTask(userId, taskId){
        return Promise.resolve()
        .then(() => User.findById( userId )
        )
        .then(user =>{
            if (!user) throw Error('wrong credentials')
           return user
        })
        .then(user =>{
            if (!user.taskId || user.taskId === ''){
                
                Task.findById(taskId)
                
                .then(task =>{
                    if(task.apartmentId.toString() === user.apartmentId.toString()) {
                        user.taskId = taskId;
                        user.save()
                        return user; 
                    }
                })
            }
           return user
        })
    },
    deleteUserTask(taskId, userId, apartmentId){
        return Promise.resolve()
        .then(() => this.listUsers( apartmentId ))
        
        .then(users =>{
            
           const filteredUsersWithTask = users.filter(users =>{
               return users.taskId
           })
           if( users.length=== filteredUsersWithTask.length){
            let saveTaskId = []
                for (let i=0; i<users.length; i++){
                   saveTaskId.push(users[i].taskId)
                }
              User.update({_id: user.id}, { $unset: { taskId: null } }).then(result => console.info({result}))
              return saveTaskId
          }

            
        })
    },
    addUserTask(apartemntId, saveTaskId){
        return Promise.resolve()
        .then(() => this.listUsers( apartmentId ))
        
        .then(users =>{
            User.assign

            

    })
    },

    // rotateUsersTasks(apartmentId){
    //     return Promise.resolve()

    //     .then(() => {this.listTasks( apartmentId )

    //         .then(tasks =>{
                
    //         const tasks2= tasks.slice
            
    //         const firstTask = tasks2.map(task =>{
               
    //             return task[0].id
    //         })
    //         .then(() => {this.listUsers( apartmentId )
    
    //             .then(users =>{
        
    //                 const users2 = users.slice()
    //                 const filteredUsersWithTask = users2.filter(user =>{
    //                      user.taskId
    //                      if(user.taskId !== firstTask){
    //                          return user.tak
    //                      }
    //                 })  

    //                if (filteredUsersWithTask.length>0) {
    //                    return user.taskId=firstTask
    //                }
                    
    //             })
    //         })
    //         })
    //     })   
    // },
    rotateUsersTasks(apartmentId){

        return Promise.resolve()
            .then(() => {
                return Task.find({ apartmentId })
                    .then(tasks => {
                        const tasks2= tasks.slice
                        console.log('tasks2: ', tasks2)
                        .then(() => {
                                return Users.find({ apartmentId })
                                .then(users => {
                                    const users2= users.slice
                                    
                                    console.log('users2: ', users2)
                                        return users2
                                    .then (()=>{
                                        const users = [
                                            { id: '1', taskId: '1' },
                                            { id: '2', taskId: '2' },
                                            { id: '3', taskId: '3' }
                                            ];
                                            
                                            const tasks = [
                                            { id: '1', name: 'task1' },
                                            { id: '2', name: 'task2' },
                                            { id: '3', name: 'task3' }
                                            ];
                                            
                                            let newAssociation = [];
                                            
                                            function doAssociations(tasks2, users2) {
                                                tasks2.forEach(task => {
                                                  const notAssociatedUsers = users2.filter(user => user.taskId !== task.id ? user.id : null );
                                                console.info('task', task)
                                                console.info('not associated users', notAssociatedUsers)
                                                var randomItem = notAssociatedUsers[Math.floor(Math.random()*notAssociatedUsers.length)];
                                                newAssociation.push({
                                                taskId: task.id,
                                                userId: randomItem.id
                                                })
                                              });
                                              console.info(newAssociation);
                                            }
                                            
                                            doAssociations(tasks, users);
                                })
                                })
                        })
            })


            })
        
    },
    
    listUsers(apartmentId) {

        return Promise.resolve()
            .then(() => {
                return User.find({ apartmentId })
                    .then(users => {
                        if (!users) throw Error(`no users found`)

                        return users
                    })

            })
    },

    /**
     * 
     * @param {string} id 
     * @param {string} email 
     * @param {string} password 
     * 
     * @returns {Promise<boolean>}
     */
    unregisterUser(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                
                return User.findById({ _id: id })
            })
            .then(user => {
              

                if (user.id !== id) throw Error(`no user found with id ${id} for given credentials`)

                return user.remove()
            })
            .then(() => true)
    },

    registerApartment(name, address, phone) {
        return Promise.resolve()
            .then(() => {

                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof address !== 'string') throw Error('user address is not a string')

                if (!(address = address.trim()).length) throw Error('user address is empty or blank')

                if (typeof phone !== 'string') throw Error('user phone is not a string')

                if ((phone = phone.trim()).length === 0) throw Error('user phone is empty or blank')

              
                return Apartment.create({ name, address, phone })
                    .then(({ id }) => {
                        return id

                    })
            })
    },
    updateApartment(id, name, address, phone, owner, realState  ) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof address !== 'string') throw Error('user address is not a string')

                if ((address = address.trim()).length === 0) throw Error('user address is empty or blank')

                if (typeof phone !== 'string') throw Error('user phone is not a string')

                if (!(phone = phone.trim()).length) throw Error('user phone is empty or blank')

                if (typeof owner !== 'string') throw Error('user owner is not a string')

                if (!(owner = owner.trim()).length) throw Error('user owner is empty or blank')

                if (typeof realState !== 'string') throw Error('user realState is not a string')

                if ((realState = realState.trim()).length === 0) throw Error('user realState is empty or blank')

                return Apartment.findById(id )
            })
            .then(apartment => {
                if (!apartment) throw Error('wrong credentials')

                if (apartment.id !== id) throw Error(`no apartment found with id ${id} for given credentials`)

                return apartment
            })
            .then(apartment => {
                
                apartment.name = name
                apartment.address = address
                apartment.phone=phone
                apartment.owner=owner
                apartment.realState = realState
                console.log(apartment.owner)
                

                return Apartment.update({_id: apartment.id}, { name:apartment.name, address:apartment.address, phone:apartment.phone, owner: apartment.owner, realState: apartment.realState }, { multi: true } )
                
            })
            .then(() => true)
    },

    apartmentExists(apartmentId) {
        return Promise.resolve()
            .then(() => {
                return Apartment.findById(apartmentId)
                    .then(apartment => {
                        if (!apartment) throw Error(`no apartment found`)
                        return apartment
                    })
            })
    },
    listApartment(apartmentId) {

        return Promise.resolve()
            .then(() => {
                return Apartment.findById(apartmentId)
                    .then(apartments => {
                        if (!apartments) throw Error(`no apartment found`)

                        return apartments
                    })
            })

    },
    deleteApartment(apartmentId) {
        return Apartment.findById({ _id: apartmentId })
            .then((apartment) => {
                const id = apartment._id
                return User.deleteMany( {"apartmentId":id })
                    .then(() => {
                        
                        if (!apartment) throw Error(`no apartment found`)

                        return apartment.remove()
                    })
                    .then(() => true)
            })


    },

    addTasks(name, apartmentId) {
        return Promise.resolve()
            .then(() => {

                return Task.create({ name, apartmentId })
                    .then(task => {


                        if (!task) throw Error('wrong credentials')

                        return { id: task.id }
                    })
            })

    },
    listTasks(apartmentId) {
        return Promise.resolve()
            .then(() => {
                return Task.find({ apartmentId })
                    .then(tasks => {
                        if (!tasks) throw Error(`no tasks found`)

                        return tasks
                    })
            })
    },
    deleteTask(taskId) {

        return Promise.resolve()
            .then(() => {
                return Task.findById(taskId)
            })
            .then(task => {
                if (!task) throw Error('wrong credentials')
                
                if (task.id !== taskId) throw Error(`no task found with id ${taskId} for given credentials`)
                    return Task.findByIdAndRemove({ _id: taskId })
                        .then(() => {

                            return User.findOne({"taskId": taskId})
                            .then( user =>{

                                User.update({_id: user.id}, { $unset: { taskId: null } })
                        })
                })
                        
                    
                })
    },
    addMarket(name, apartmentId) {
        return Promise.resolve()
            .then(() => {

                return Market.create({ name, apartmentId })
                    .then(market => {


                        if (!market) throw Error('wrong credentials')

                        return { id: market.id }
                    })
            })

    },
    listMarket(apartmentId) {
        return Promise.resolve()
            .then(() => {
                return Market.find({ apartmentId })
                    .then(market => {
                        if (!market) throw Error(`no things found`)
                        return market
                    })
            })
    },

    deleteMarket(marketId) {

        return Promise.resolve()
            .then(() => {
                return Market.findById(marketId)
            })
            .then(market => {
                if (!market) throw Error('wrong credentials')

                if (market.id !== marketId) throw Error(`no things found with id ${marketId} for given credentials`)

                return Market.findByIdAndRemove({ _id: marketId })
                    .then(() => true)

            })
    },

    addNotes(name, apartmentId) {
        return Promise.resolve()
            .then(() => {

                return Note.create({ name, apartmentId })
                    .then(note => {


                        if (!note) throw Error('wrong credentials')

                        return { id: note.id }
                    })
            })

    },
    listNotes(apartmentId) {
        return Promise.resolve()
            .then(() => {
                return Note.find({ apartmentId })
                    .then(notes => {
                        if (!notes) throw Error(`no notes found`)

                        return notes
                    })
            })
    },
    deleteNote(noteId) {

        return Promise.resolve()
            .then(() => {
                return Note.findById(noteId)
            })
            .then(note => {
                if (!note) throw Error('wrong credentials')

                if (note.id !== noteId) throw Error(`no note found with id ${noteId} for given credentials`)

                return Note.findByIdAndRemove({ _id: noteId })
                    .then(() => true)

            })
    }
}

module.exports = logic
