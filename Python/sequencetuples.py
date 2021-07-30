import collections
import typing

numbers = [1, 2, 3, 4, 5]
numbers_plus_five = [(val+5) for val in numbers]
print(numbers_plus_five)
print(list(filter(lambda a:a>3, numbers)))

symbols = '$¢£¥€¤'
ascii = [ord(s) for s in symbols if ord(s) > 127]   #List comp
print(ascii)
ascii = list(filter(lambda x: x > 127, map(ord, symbols)))  #map & filter
print(ascii)

#Cartesian product for loop -  Phone(brand, model) for brand in self.brands for model in self.models
#Generator expressions with tuple "()"
    #tuple(ord(symbol) for symbol in symbols) #(36, 162, 163, 165, 8364, 164)
    #array.array('I', (ord(symbol) for symbol in symbols)) #array('I', [36, 162, 163, 165, 8364, 164])
    #for tshirt in (f'{c} {s}' for c in colors for s in sizes):print(tshirt) - cartesian product with generator xpresns


#tuples as records
lax_coordinates = (33.9425, -118.408056)
city, year, pop, chg, area = ('Tokyo', 2003, 32_450, 0.66, 8014) #like spread
traveler_ids = [('USA', '31195855'), ('BRA', 'CE342567'), ('ESP', 'XDA205856')]
for passport in sorted(traveler_ids):
    print('%s/%s' % passport)
for country, _ in traveler_ids:
    print(country)

#tuples are immutable lists
a = (10, 'alpha', [1, 2])

# a, b, *rest_items = (1,2,3,4,5)

#typing.namedTuples
Coordinate = typing.NamedTuple('Coordinate', [('lat', float), ('lon', float)])
#collections.namedTuples
Coordinate2 = collections.namedtuple('Coordinate', ['lat', 'lon'])


class Coordinate(typing.NamedTuple): #dataclass decorator
    lat: float
    lon: float

    def __str__(self):
        ns = 'N' if self.lat >= 0 else 'S'
        we = 'E' if self.lon >= 0 else 'W'
        return f'{abs(self.lat):.1f}°{ns}, {abs(self.lon):.1f}°{we}'  #f'' to know