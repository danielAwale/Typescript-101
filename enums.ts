// Enums 

// Enums allow us to define a set of names constants. We can give these constant numeric or string values.

// There’s quite a few options when it comes to enums. 


enum OrderStatus {
    PENDING, 
    SHIPPED, 
    DELIVERED, 
    RETURNED
}

const mystatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
    UP = "up", 
    DOWN = "down", 
    LEFT = "left", 
    RIGHT = "right"
}