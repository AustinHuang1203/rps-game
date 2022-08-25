function getComputerChoice () {
    const rps_array = [rock,paper,scissors];
    const random_index = math.floor(math.random()*3);
    return rps_array[random_index]
}