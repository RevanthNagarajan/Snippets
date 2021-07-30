import collections
from types import MappingProxyType

dial_codes = [(880, 'Bangladesh'), (55,  'Brazil')]

countryCodeDict = {country: code for code, country in dial_codes}

print(countryCodeDict)

a = dict(one=1, two=2, three=3)
b = {'three': 3, 'two': 2, 'one': 1}
c = dict([('two', 2), ('one', 1), ('three', 3)])
d = dict(zip(['one', 'two', 'three'], [1, 2, 3]))
e = dict({'three': 3, 'one': 1, 'two': 2})
print(a == b == c == d == e)
print(a.keys())
print(b.values())
print(c.popitem())
c.setdefault('three', 3)
print(c)
print(c.get('four',4))
print(c)


class CustomDict(dict):
    def __missing__(self, key):
        if isinstance(key, str):
            raise KeyError(key)
        return self[str(key)]

    def get(self, key, default=None):
        try:
            return self[key]
        except KeyError:
            return default

    def __contains__(self, key):
        return key in self.keys() or str(key) in self.keys()  # key in keys is much effecient


#collections.OrderedDict
#collections.ChainMap
#collections.UserDict
#typing.TypedDict

class StrKeyDict(collections.UserDict):  #extends userdict instead of dict
    def __missing__(self, key):
        if isinstance(key, str):
            raise KeyError(key)
        return self[str(key)]

    def __contains__(self, key):
        return str(key) in self.data

    def __setitem__(self, key, item):
        self.data[str(key)] = item


#mapped proxy - read only instance of dict
d = {1: 'A'}
d_proxy = MappingProxyType(d)
print(d_proxy[1])
d[2] = 'B'
print(d_proxy[2])


"""
found = 0
for n in needles:
    if n in haystack:
        found += 1
        
found = len(set(needles) & set(haystack))
found = len(set(needles).intersection(haystack))
"""
