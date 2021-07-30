import collections;
from array import array
from random import choice

Phone = collections.namedtuple('Phone', ['brand', 'model'])


class Creator:
    brands = 'Apple/Samsung/Oneplus/Sony'.split('/')
    models = range(2010, 2021)

    def __init__(self):
        self._phones = [
            Phone(brand, model) for brand in self.brands for model in self.models
        ]

    def __len__(self):
        return len(self._phones)

    """get is not subscriptable """
    def __getitem__(self, pos):
        return self._phones[pos]


phone = Creator()
print(len(phone))
print(choice(phone))

brandWeight = dict(Apple=3, Samsung=0, Oneplus=1, Sony=2)


def worthyfirst(param):
    model_position = Creator.models.index(param.model)
    return model_position * len(brandWeight) + brandWeight[param.brand]


for phn in sorted(phone, key=worthyfirst):
    print(phn)

print((phone.__getitem__(2)))
"""
mutability of list
def __init__(self, passengers=None):
        if passengers is None:
            self.passengers = []
        else:
            self.passengers = list(passengers)


"""