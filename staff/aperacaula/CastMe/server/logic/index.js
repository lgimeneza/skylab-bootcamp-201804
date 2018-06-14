"use strict";

const {
  models: {
    User,
    Project,
    Casting,
    PersonalData,
    PhysicalData,
    ProfessionalData
  }
} = require("data");
const cloudinary = require('cloudinary');


cloudinary.config({
  cloud_name: 'dt6qv2j4j',
  api_key: '997973713297344',
  api_secret: '19Oy6OPTOX2qZ05zq9bPQb3aVb8'
});

const logic = {
  /**
   *
   *
   * @param {string} email
   * @param {string} password
   * @param {object} personalData
   * @param {object} physicalData
   * @param {object} professionalData
   * @param {string} videobookLink
   * @param {string} profilePicture
   *
   *
   *
   *
   * @returns {Promise<boolean>}
   */
  registerUser(
    email,
    password,
    personalData,
    physicalData,
    professionalData,
    videobookLink,
    profilePicture
  ) {

    return Promise.resolve().then(() => {
      if (typeof email !== "string") throw Error("user email is not a string");

      if (!(email = email.trim()).length)
        throw Error("user email is empty or blank");

      if (typeof password !== "string")
        throw Error("user password is not a string");

      if ((password = password.trim()).length === 0)
        throw Error("user password is empty or blank");

      if (typeof personalData !== "object")
        throw Error("personal data is not what it should be");

      if (typeof professionalData !== "object")
        throw Error("professional data is not what it should be");

      if (typeof physicalData !== "object")
        throw Error("physical data is not what it should be");

      if (typeof videobookLink !== "string")
        throw Error("user videobookLink is not a string");

      if ((videobookLink = videobookLink.trim()).length === 0)
        throw Error("user videobookLink is empty or blank");



      return new Promise((resolve, reject) => {
        return cloudinary.v2.uploader.upload(profilePicture, function (err, data) {
          if (err) return reject(err)

          resolve(data.url)
        })
      })
        .then(url => {
          return User.findOne({ email }).then(user => {
            if (user) throw Error(`user with email ${email} already exists`);

            return User.create({
              email,
              password,
              personalData,
              physicalData,
              professionalData,
              videobookLink,
              profilePicture: url
            }).then(() => true);
          });

        })
    });
  },

  /**
   *
   * @param {string} email
   * @param {string} password
   *
   * @returns {Promise<string>}
   */
  authenticateUser(email, password) {
    return Promise.resolve()
      .then(() => {
        if (typeof email !== "string")
          throw Error("user email is not a string");

        if (!(email = email.trim()).length)
          throw Error("user email is empty or blank");

        if (typeof password !== "string")
          throw Error("user password is not a string");

        if ((password = password.trim()).length === 0)
          throw Error("user password is empty or blank");

        return User.findOne({ email, password });
      })
      .then(user => {
        if (!user) throw Error("wrong credentials");

        return user.id;
      });
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
        if (typeof id !== "string") throw Error("user id is not a string");

        if (!(id = id.trim()).length) throw Error("user id is empty or blank");

        return User.findById(id);
      })
      .then(user => {
        if (!user) throw Error(`no user found with id ${id}`);

        const {
          email,
          personalData,
          physicalData,
          professionalData,
          videobookLink,
          pics,
          profilePicture,
          applications
        } = user;
        return {
          id,
          email,
          personalData,
          physicalData,
          professionalData,
          videobookLink,
          pics,
          profilePicture,
          applications
        };
      });
  },

  /**
   *
   * @param {string} email
   * @param {string} password
  * @param {string} newEmail
   * @param {string} newPassword
   * @param {object} personalData
   * @param {object} physicalData
   * @param {object} professionalData
   * @param {string} videobookLink
   * @param {file} pics
   * @param {string} profilePicture

   *
   * @returns {Promise<boolean>}
   */
  updateUser(
    email,
    password,
    newEmail,
    newPassword,
    personalData,
    physicalData,
    professionalData,
    videobookLink,
    pics,
    profilePicture
  ) {
    return Promise.resolve()
      .then(() => {
        if (typeof email !== "string")
          throw Error("user email is not a string");

        if (!(email = email.trim()).length)
          throw Error("user email is empty or blank");

        if (typeof password !== "string")
          throw Error("user password is not a string");

        if ((password = password.trim()).length === 0)
          throw Error("user password is empty or blank");

        if (typeof newEmail !== "string")
          throw Error("user newEmail is not a string");

        if (!(newEmail = newEmail.trim()).length)
          throw Error("user newEmail is empty or blank");

        if (typeof newPassword !== "string")
          throw Error("user newPassword is not a string");

        if ((newPassword = newPassword.trim()).length === 0)
          throw Error("user newPassword is empty or blank");

        if (typeof videobookLink !== "string")
          throw Error("user videobookLink is not a string");

        if ((videobookLink = videobookLink.trim()).length === 0)
          throw Error("user videobookLink is empty or blank");

        if (typeof personalData !== "object")
          throw Error("personal data is not what it should be");

        if (typeof professionalData !== "object")
          throw Error("professional data is not what it should be");

        if (typeof physicalData !== "object")
          throw Error("physical data is not what it should be");


        return User.findOne({ email, password });
      })
      .then(user => {
        if (!user) throw Error("wrong credentials");

        if (newEmail) {
          return User.findOne({ email: newEmail }).then(_user => {
            if (_user && _user.id !== user.id)
              throw Error(`user with email ${newEmail} already exists`);

            return user;
          });
        }

        return user;
      })
      .then(user => {
        user.email = newEmail ? newEmail : email;
        user.password = newPassword ? newPassword : password;
        user.personalData = personalData;
        user.professionalData = professionalData;
        user.physicalData = physicalData;
        user.videobookLink = videobookLink;
        user.pics = pics;
        user.profilePicture = profilePicture;

        return user.save();
      })
      .then(() => true);
  },

  /**
   *
   * @param {string} id
   * @param {string} email
   * @param {string} password
   *
   * @returns {Promise<boolean>}
   */
  unregisterUser(id, email, password) {
    return Promise.resolve()
      .then(() => {
        if (typeof id !== "string") throw Error("user id is not a string");

        if (!(id = id.trim()).length) throw Error("user id is empty or blank");

        if (typeof email !== "string")
          throw Error("user email is not a string");

        if (!(email = email.trim()).length)
          throw Error("user email is empty or blank");

        if (typeof password !== "string")
          throw Error("user password is not a string");

        if ((password = password.trim()).length === 0)
          throw Error("user password is empty or blank");

        return User.findOne({ email, password });
      })
      .then(user => {
        if (!user) throw Error("wrong credentials");

        if (user.id !== id)
          throw Error(`no user found with id ${id} for given credentials`);

        return user.remove();
      })
      .then(() => true);
  },

  /**
   *
   * 
   *
   * @returns {Promise<array>} 
   */
  listProjects() {
    return Promise.resolve()
      .then(() => {

        return Project.find()
      })
  },



  /**
   *
   * @param {string} userId
   *
   * @returns {Promise<array>} with all the applications the user has, which are objects with project info on project method and castings array with casting info in castings method
   */
  getUserAppliedProjectCastings(userId) {
    return Promise.resolve()
      .then(() => {
        if (typeof userId !== "string") throw Error("user id is not a string");

        if (!(userId = userId.trim()).length)
          throw Error("user id is empty or blank");

        return User.findById(userId).populate('applications.project');
      })
      .then(user => {
        return user.applications.map(application => {
          const { project, castings } = application

          const castingIds = castings.map(casting => casting.toString())

          const filteredCastings = project.castings.filter(casting => {
            const id = casting._id.toString()

            return castingIds.includes(id)
          })

          project.castings = filteredCastings

          return project
        })
      });
  },


  getAge(date1) {
    var birthday = date1;
    var today = new Date();
    var years = today.getFullYear() - birthday.getFullYear();
    birthday.setFullYear(today.getFullYear());
    if (today < birthday) years--;
    return years
  },

  /**
   *
   * @param {string} userId
   * @param {string} castingId
   * @returns {Promise<boolean>} returns true if the user can subscribe to the casting.
   */
  userIsEligible(userId, projectId, castingId) {
    return Promise.resolve()
      .then(() => {

        if (typeof userId !== 'string') throw Error('user id is not a string')

        if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

        if (typeof castingId !== 'string') throw Error('casting id is not a string')

        if (!(castingId = castingId.trim()).length) throw Error('casting id is empty or blank')

        return User.findById(userId)
          .then(user => {
            return Project.findById(projectId)
              .then(project => {
                const casting = project.castings.find(casting => casting._id.toString() === castingId)
                const age = this.getAge(user.personalData.birthDate)

                if (!casting.status) return false

                if (!(age >= casting.minAge && age <= casting.maxAge)) return false

                if (user.personalData.sex !== casting.sex) return false

                const requirements = Object.values(casting.physicalReq.toObject())
                const userProps = Object.values(user.physicalData.toObject())

                const minHeight = requirements[1]
                const userHeight = userProps[1]

                if (userHeight < minHeight) return false

                for (let i = 2; i < requirements.length; i++) {
                  if (!requirements[i]) {
                    if (requirements[i] !== userProps[i]) return false
                  }
                }

                return true

              })
          })

      })
  },

  /**
   *
   * @param {string} userId
   * @param {string} projectId
   * @param {string} castingId
   *
   * @returns {Promise<boolean>} that confirms the user has joined the casting
   */
  joinCasting(userId, projectId, castingId) {
    return Promise.resolve()
      .then(() => {

        if (typeof userId !== 'string') throw Error('user id is not a string')

        if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

        if (typeof projectId !== 'string') throw Error('user id is not a string')

        if (!(projectId = projectId.trim()).length) throw Error('user id is empty or blank')

        if (typeof castingId !== 'string') throw Error('user id is not a string')

        if (!(castingId = castingId.trim()).length) throw Error('user id is empty or blank')

        return User.findById(userId)
      })
      .then(user => {
        return Project.findById(projectId)
          .then(project => {
            const casting = project.castings.find(casting => casting._id.toString() === castingId)

            if (!casting) throw Error(`there is no casting with id ${castingId} in the project given`)

            const userEligible = this.userIsEligible(userId, projectId, castingId)

            if (!userEligible) return false

            casting.applicants.push(user._id) //ads the user to the casting user's list

            const index = null;
            for (let i = 0; i < user.castings.length; i++) {
              if (user.castings[i].project.toString() === projectId) {
                index = i
              }
            }

            if (index) {
              user.castings[index].castings.push(casting_id)
            } else {
              user.castings.push({ project: project_id, castings: casting_id })
            }

            return true

          })
      })
  },

  // /**
  //  *
  //  * @param {string} userId
  //  * @param {string} projectId
  //  * @param {string} castingId
  //  *
  //  * @returns {Promise<boolean>} that confirms the user has joined the casting
  //  */
  // quitCasting(userId, projectId, castingId){
  //     return Promise.resolve()
  //         .then(()=>{

  //             if (typeof userId !== 'string') throw Error('user id is not a string')

  //             if (!(userId = userId.trim()).length) throw Error('user id is empty or blank')

  //             if (typeof projectId !== 'string') throw Error('user id is not a string')

  //             if (!(projectId = projectId.trim()).length) throw Error('user id is empty or blank')

  //             if (typeof castingId !== 'string') throw Error('user id is not a string')

  //             if (!(castingId = castingId.trim()).length) throw Error('user id is empty or blank')

  //             return User.findById(userId)
  //         })
  //         .then(user =>{
  //             return Project.findById(projectId)
  //                 .then(project =>{
  //                     const casting= project.castings.find(casting=> casting._id.toString()===castingId)

  //                     if (!casting) throw Error(`there is no casting with id ${castingId} in the project given`)

  //                     const indexUser= null;//let 's take the user off the casting applicants list
  //                     for (let i=0; i<casting.applicants.length; i++){
  //                         if (casting.applicants[i].toString()===userId) indexUser=i
  //                     }

  //                     if(!indexUser) throw Error('user is not registered in the given casting')

  //                     casting.applicants.splice(indexUser,1)

  //                     const indexCasting= null;//let's take the casting off the user's list
  //                     for (let i=0; i<user.castings.length; i++){
  //                         if (user.castings[i].project.toString()===projectId){
  //                             indexCasting= i
  //                         }
  //                     }

  //                     if (!indexCasting) throw Error('user is not registered in the given casting')

  //                     for (let i=0; i<user.castings.length; i++){
  //                         if (user.castings[indexCasting].castings[i].toString()===castingId){
  //                             user.castings[indexCasting].castings.splice(i,1)
  //                         }
  //                     }
  //                     if(user.castings[indexCasting].castings.length===0) user.castings.splice(indexCasting,1)

  //                     return true

  //                 })
  //         })
  //     }
};

module.exports = logic;
