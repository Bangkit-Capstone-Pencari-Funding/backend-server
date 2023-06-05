const prisma = require('../utils/prisma')
const {ApiError} = require('../errors/')


async function createChild(req){
    const {id} = req.user
    const {
        childName,
        dateOfBirth,
        gender,
        weight,
        height,
        activity
        } = req.body
    if(!childName) throw new ApiError(400, "Child Name required")
    if(!dateOfBirth) throw new ApiError(400, "Date Of Birth required")
    if(!gender) throw new ApiError(400, "Gender required")
    if(!weight) throw new ApiError(400, "weight required")
    if(!height) throw new ApiError(400, "Height required")

    function calculateCaloriesNeeded(age, weight) {
        let res = 89 * weight - 100
        if(age<0) throw new ApiError(400, "Invalid Date Of Birth")

        if(age<4) res += 175
        else if(age<7) res += 56
        else if(age<13) res += 22
        else if(age>36) res += 20

        return res
    }

    const currentDate = new Date()
    const dob = new Date(dateOfBirth)
    const childAge = (currentDate.getMonth() - dob.getMonth()) + 12 * (currentDate.getFullYear() - dob.getFullYear());
    const caloriesNeeded = calculateCaloriesNeeded(childAge, weight)
    
    const createdChild = await prisma.child.create({
        data: {
            name: childName,
            date_of_birth: dob,
            gender: gender === 'male' ? 'LAKI' : 'PEREMPUAN',
            weight: weight,
            height: height,
            user_id: id,
            calories_needed: caloriesNeeded,
            activity: activity
        }
        })
    return createdChild
}

async function updateChild(req){
    const {
        childName,
        dateOfBirth,
        gender,
        weight,
        height,
        favoriteFood,
        email,
        phoneNumber,
        profileName
      } = req.body
    const {id} = req.user
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    let updated = {}

    if(!user) throw new ApiError(400, "User tidak ditemukan")
    if (childName) updated.childName = childName
    if (dateOfBirth) updated.dateOfBirth = dateOfBirth
    if (gender) updated.gender = gender
    if (weight) updated.weight = weight
    if (height) updated.height = height
    if (favoriteFood) updated.favoriteFood = favoriteFood
    if (email) updated.email = email
    if (phoneNumber) updated.phoneNumber = phoneNumber
    if (profileName) updated.profileName = profileName
    
    const updatedChild = await prisma.child.update({
      where: { id: id },
      data: updated
    })

    return updatedChild;
}


module.exports = {
  createChild,
  updateChild
}